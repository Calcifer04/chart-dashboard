import { mockData } from '../../mock-data'
import React from 'react'
import Donut from './Donut'
import Line from './Line'
import '../styles/Content.css'

const Content = () => {
    return (
        <div className='content'>
            <table className='table-box'>
                <tr className='table-header'>
                    <th className='table-title'>Name</th>
                    <th className='table-title'>ID</th>
                    <th className='table-title'>Stock</th>
                    <th className='table-title-end'>Sold</th>
                </tr>
                {mockData.map((item) => (
                <tr className='table-item'>
                    <td className='item-name'>{item.name}</td>
                    <td className='item-id'>{item.id}</td>
                    <td className='item-stock'>{item.stock}</td>
                    <td className='item-sold'>{item.sold}</td>
                </tr>
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
    )
}

export default Content