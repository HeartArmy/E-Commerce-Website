import React from 'react';
import './Sidebar.css';
import { useHistory} from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarOption from "../components/SidebarOption";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import ShowChartIcon from '@material-ui/icons/ShowChart';

function Sidebar() {
    const history = useHistory();
    return (
            <div className="SidebarContainer">
                <div className="SidebarHeader">
                    <div className="SidebarInfo">
                        <h2>ADMIN PANEL</h2>
                        <h3>
                            <FiberManualRecordIcon />
                            Admin name
                        </h3>
                    </div>
                </div>
                <br />
                <SidebarOption Icon={DashboardIcon}
                    title="Dashboard"  />
                <br/>
                <SidebarOption Icon={AddShoppingCartIcon}
                title="Orders" />
                <br />
                <SidebarOption Icon={StoreIcon}
                title="Products" />
                <br />
                <SidebarOption Icon={ShowChartIcon}
                title="Analytics" />
                <br />
                <SidebarOption Icon={PeopleAltIcon}
                title="Customers" />
            </div> 
    )
}

export default Sidebar
