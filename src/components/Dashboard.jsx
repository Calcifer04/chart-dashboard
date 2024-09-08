import React from 'react'
import SideBar from './SideBar'
import '../styles/Dashboard.css'
import BodyContainer from './BodyContainer'


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <SideBar/>
            <BodyContainer/>
        </div>
    )
}

export default Dashboard