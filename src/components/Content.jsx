import React, { useState } from 'react';
import axios from 'axios';
import Donut from './Donut';
import Line from './Line';
import SortArrow from '../assets/sortarrow.svg';
import useProducts from '../hooks/useProducts';
import editbutton from '../assets/editbutton.svg';
import deletebutton from '../assets/deletebutton.svg';
import savebutton from '../assets/savebutton.svg';
import '../styles/Content.css';

const Content = ({ searchTerm }) => {
    const [listOfProducts, setListOfProducts] = useProducts();
    const [sortField, setSortField] = useState('null');
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedItem, setSelectedItem] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedValues, setEditedValues] = useState({});

    const handleRowClick = (index) => {
        if (editingIndex !== null) {
            return;
        }
        
        const newSelectedItem = index === selectedItem ? null : index;
        setSelectedItem(newSelectedItem);
        
        if (newSelectedItem !== null) {
            console.log(
                newSelectedItem, 
                filteredData[index]?.name, 
                filteredData[index]?.id, 
                filteredData[index]?._id
            );
        }
    };

    const handleSort = (field) => {
        if (editingIndex !== null) {
            console.warn("Cannot sort while editing.");
            return;
        }
        const newSortOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(newSortOrder);
    };

    const handleEditClick = (index, item) => {
        setEditingIndex(index);
        setEditedValues({ name: item.name, id: item.id, stock: item.stock, sold: item.sold });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedValues(prevState => ({ ...prevState, [name]: value }));
    };

    const filteredData = listOfProducts.filter(item => {
        return (
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.includes(searchTerm.toLowerCase())
        );
    }).sort((a, b) => {
        if (!sortField) return 0;
        return sortOrder === 'asc' ? (a[sortField] > b[sortField] ? 1 : -1) : (a[sortField] < b[sortField] ? 1 : -1);
    });
    
    const handleSave = async () => {
        if (selectedItem === null) {
            console.error("No item selected for saving.");
            return;
        }
    
        const productToUpdate = filteredData[selectedItem];
        
        if (!productToUpdate || !productToUpdate._id) {
            console.error("No valid product found for updating.");
            return;
        }
    
        const updatedProduct = {
            newName: editedValues.name,
            newId: editedValues.id,
            newStock: editedValues.stock,
            newSold: editedValues.sold,
            _id: productToUpdate._id
        };
    
        try {
            const response = await axios.put(
                `http://localhost:3001/updateProducts`,
                updatedProduct
            );
    
            console.log("Product updated successfully:", response.data);
    
            setListOfProducts(prevProducts =>
                prevProducts.map(product =>
                    product._id === updatedProduct._id
                        ? { ...product, ...response.data }
                        : product
                )
            );
    
            setEditingIndex(null);
            setSelectedItem(null);
            location.reload();
        } catch (error) {
            console.error("Failed to update product:", error);
        }
    };

    const deleteProduct = async () => {
        if (selectedItem === null) {
            console.error("No item selected for deletion.");
            return;
        }
    
        const productToDelete = filteredData[selectedItem];
    
        if (!productToDelete || !productToDelete._id) {
            console.error("No valid product found for deletion.");
            return;
        }
        
        const confirmDelete = window.confirm(`Are you sure you want to delete the product: ${productToDelete.name}?`);

        if (!confirmDelete) {
            return;
        }

        try {
            await axios.delete(`http://localhost:3001/deleteProducts/${productToDelete._id}`);
            console.log("Product deleted successfully.");

            setListOfProducts(prevProducts =>
                prevProducts.filter(product => product._id !== productToDelete._id)
            );
    
            setSelectedItem(null);
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };
    

    return (
        <div className='content'>
            <table className='table-box'>
                <tr className='table-header'>
                    <th className='table-title'>
                        Name
                        <img
                            className={`sort ${editingIndex !== null ? 'disabled' : ''}`}
                            src={SortArrow}
                            onClick={() => editingIndex === null && handleSort('name')}
                            alt='name'
                        />
                        </th>
                    <th className='table-title'>
                        ID
                        <img
                            className={`sort ${editingIndex !== null ? 'disabled' : ''}`}
                            src={SortArrow}
                            onClick={() => editingIndex === null && handleSort('id')}
                            alt='id'
                        />
                    </th>
                    <th className='table-title'>
                        Stock
                        <img
                            className={`sort ${editingIndex !== null ? 'disabled' : ''}`}
                            src={SortArrow}
                            onClick={() => editingIndex === null && handleSort('stock')}
                            alt='stock'
                        />
                    </th>
                    <th className='table-title'>
                        Sold
                        <img
                            className={`sort ${editingIndex !== null ? 'disabled' : ''}`}
                            src={SortArrow}
                            onClick={() => editingIndex === null && handleSort('sold')}
                            alt='sold'
                        />
                    </th>
                </tr>
                {filteredData.map((item, index) => (
                    <React.Fragment key={index}>
                        <tr 
                            className={`table-item ${selectedItem === index ? 'selected' : ''}`} 
                            onClick={() => handleRowClick(index)}
                        > 
                            <td className='item-data'>
                                {editingIndex === index ? (
                                    <input
                                        className='edit-input'
                                        type="text"
                                        name="name"
                                        value={editedValues.name}
                                        onChange={handleInputChange}
                                    />
                                ) : item.name}
                            </td>
                            <td className='item-data id'>
                                {editingIndex === index ? (
                                    <input
                                        className='edit-input'
                                        type="text"
                                        name="id"
                                        value={editedValues.id}
                                        onChange={handleInputChange}
                                    />
                                ) : item.id}
                            </td>
                            <td className='item-data'>
                                {editingIndex === index ? (
                                    <input
                                        className='edit-input'
                                        type="number"
                                        name="stock"
                                        value={editedValues.stock}
                                        onChange={handleInputChange}
                                    />
                                ) : item.stock}
                            </td>
                            <td className='item-data'>
                                {editingIndex === index ? (
                                    <input
                                        className='edit-input'
                                        type="number"
                                        name="sold"
                                        value={editedValues.sold}
                                        onChange={handleInputChange}
                                    />
                                ) : item.sold}
                            </td>
                        </tr>
                        {selectedItem === index && (
                            <tr className='action-row'>
                                <td className="button-wrapper" colSpan="4">
                                    <div className="action-buttons">
                                        {editingIndex === index ? (
                                            <img
                                                src={savebutton} 
                                                className='action-button save'
                                                onClick={() => handleSave()}/>
                                        ) : (
                                            <img
                                                className='action-button edit'
                                                src={editbutton}
                                                onClick={() => handleEditClick(index, item)}
                                                alt="Edit"
                                            />
                                        )}
                                        <img
                                            className='action-button delete'
                                            src={deletebutton}
                                            onClick={() => {deleteProduct()}}
                                            alt="Delete"
                                        />
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </table>
            <div className='graph-boxes'>
                <div className='pie-chart'>
                    <div className='donut-wrapper'>
                        <Donut/>
                    </div>
                </div>
                <div className='line-graph'>
                    <div className='line-wrapper'>
                        <Line/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
