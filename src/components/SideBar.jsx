import React, { useState } from "react";
import '../styles/SideBar.css'
import Wifi from '../assets/wifi.svg'
import DashboardIcon from '../assets/dashboard.svg'
import ArchiveIcon from '../assets/archive.svg'
import StatisticsIcon from '../assets/statistics.svg'
import OptionsIcon from '../assets/options.svg'

const menuitems = ["Dashboard", "Archive", "Statistics", "Options"]
const menuicons = [DashboardIcon, ArchiveIcon, StatisticsIcon, OptionsIcon]

const SideBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`box ${isExpanded ? 'expanded' : ''}`}>
            <div className="box-heading">
                <img className="wifi" src={Wifi} onClick={toggleSidebar} alt="Toggle sidebar" />
                <h2 className={`heading-text ${isExpanded ? 'expanded' : ''}`}>SoftLink</h2>
            </div>
            {menuitems.map((item, index) => (
                <div key={index} className="box-item">
                    <img className="icons" src={menuicons[index]} alt={item} />
                    {isExpanded && <a className="item-text">{item}</a>}
                </div>
            ))}
        </div>
    );
};

export default SideBar;