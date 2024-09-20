import { useState } from 'react';
import Axios from 'axios';
import useProducts from '../hooks/useProducts';
import '../styles/addDataForm.css';

const AddButtonWithForm = () => {
    const [listOfProducts, setListOfProducts] = useProducts();
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [stock, setStock] = useState(0);
    const [sold, setSold] = useState(0);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const addProduct = () => {

        if (!name || !id || !stock || !sold) {
            alert("Please fill out all fields.");
            return;
        }
        
        Axios.post("http://localhost:3001/addProducts", {name, id, stock, sold }
        ).then(() => {
            setListOfProducts([...listOfProducts, {name: name, id: id, stock: stock, sold: sold}]);
        });
    }

    return (
        <div>
            <div className='add-button' onClick={toggleForm}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={showForm ? 'rotate-svg' : ''}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
            
            {showForm && (
                <div className="form-overlay">
                    <div className="form-container">
                        <form>
                            <div>
                                <label>Name:</label>
                                <input 
                                    className='input-data'
                                    type="text"
                                    value={name}
                                    placeholder='Product name'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>ID:</label>
                                <input
                                    className='input-data'
                                    type="text"
                                    value={id}
                                    placeholder='ID string'
                                    onChange={(e) => setId(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Stock:</label>
                                <input
                                    className='input-data'
                                    type="number"
                                    value={stock}
                                    placeholder='Stock'
                                    onChange={(e) => setStock(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Sold:</label>
                                <input
                                    className='input-data'
                                    type="number"
                                    value={sold}
                                    placeholder='Sold'
                                    onChange={(e) => setSold(e.target.value)}
                                />
                            </div>
                            <button className="form-button" onClick={addProduct} type="submit">Add</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddButtonWithForm;

