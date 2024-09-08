import React from 'react'
import '../styles/Content.css'

const Content = () => {
    return (
        <div className='content'>
            <div className='table-box'>
                <div className='table-header'></div>
                <div className='table-item'></div>
                <div className='table-item'></div>
                <div className='table-item'></div>
                <div className='table-item'></div>
            </div>
            <div className='graph-boxes'>
                <div className='pie-chart'></div>
                <div className='line-graph'></div>
            </div>
        </div>
    )
}

export default Content