import React from 'react'
import '../styles/BodyContainer.css'
import ToolBar from './ToolBar'
import Content from './Content'

const BodyContainer = () => {
    return (
        <div className='body-container'>
            <ToolBar/>
            <Content/>
        </div>
    )
}

export default BodyContainer