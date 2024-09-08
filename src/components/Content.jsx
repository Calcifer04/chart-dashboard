import React from 'react'
import Donut from './Donut'
import Line from './Line'
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