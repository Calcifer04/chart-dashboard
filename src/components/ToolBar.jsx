import React from 'react'
import AddButtonWithForm from './addDataForm'
import "../styles/ToolBar.css"

const ToolBar = ({searchTerm, setSearchTerm}) => {
    const handleSearch = (text) => {
        setSearchTerm(text)
    }
    
    return (
        <div className='toolbar' >
            <div className='searchbar-wrapper'>
                <input onChange={(e) => handleSearch(e.target.value)} className='searchbar' type='text' placeholder='Search' value={searchTerm}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='search-icon'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div className='profile-add-wrapper'>
                <AddButtonWithForm/>
                <div className='profile-circle'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="profile-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}


export default ToolBar