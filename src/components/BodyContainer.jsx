import React, { useState } from 'react'
import '../styles/BodyContainer.css'
import ToolBar from './ToolBar'
import Content from './Content'

const BodyContainer = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='body-container'>
            <ToolBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Content searchTerm={searchTerm}/>
        </div>
    )
}

export default BodyContainer