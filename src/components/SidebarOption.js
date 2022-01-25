import React from 'react';
import { useHistory } from 'react-router-dom';
import './SidebarOption.css';

function SidebarOption({Icon, title}) {
    const history = useHistory();
    return (
        <div onClick={()=>history.push('/dashboard')} className="SidebarOptionContainer">
            <Icon fontSize='small' style={{padding:10}} />
            <h3>{title}</h3>
        </div>
    )
}

export default SidebarOption
