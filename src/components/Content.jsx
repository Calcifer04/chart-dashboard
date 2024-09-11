import { mockData } from '../../mock-data'
import React, { useState } from 'react'
import Donut from './Donut'
import Line from './Line'
import SortArrow from '../assets/sortarrow.svg'
import '../styles/Content.css'

const Content = ({searchTerm}) => {
    
    const [sortField, setSortField] = useState('null');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (field) => {
        const newSortOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(newSortOrder);
    };

    const filteredData = mockData.filter(item => {
        const lowercasedSearchterm = searchTerm.toLowerCase();
        return (
            item.name.toLowerCase().includes(lowercasedSearchterm) ||
            item.id.includes(lowercasedSearchterm)
        );
    })
    .sort((a, b) => {
        if (!sortField) return 0;
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (sortOrder === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    return (
        <div className='content'>
            <table className='table-box'>
                <tr className='table-header'>
                    <th className='table-title'>Name
                        <img className="sort"
                        src={SortArrow}
                        onClick={() => handleSort('name')}
                        alt='name'/>
                    </th>
                    <th className='table-title'>ID
                        <img className="sort"
                        src={SortArrow}
                        onClick={() => handleSort('id')}
                        alt='id'/>
                    </th>
                    <th className='table-title'>Stock
                        <img className="sort"
                        src={SortArrow}
                        onClick={() => handleSort('stock')}
                        alt='stock'/>
                    </th>
                    <th className='table-title'>Sold
                        <img className="sort"
                        src={SortArrow}
                        onClick={() => handleSort('sold')}
                        alt='sold'/>
                    </th>
                </tr>
                <div className='item-wrapper'>
                {filteredData.map((item, index) => (
                <tr className='table-item' key={index}> 
                    <td className='item-data'>{item.name}</td>
                    <td className='item-data id'>{item.id}</td>
                    <td className='item-data'>{item.stock}</td>
                    <td className='item-data'>{item.sold}</td>
                </tr>
                ))}
                </div>
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
    )
}

export default Content