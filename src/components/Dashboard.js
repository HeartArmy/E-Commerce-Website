import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import './Dashboard.css';
import DashBoardCard from './DashBoardCard';
import LineChart from './LineChart';
import Sidebar from './Sidebar';
import Widgets from './Widgets';


function Dashboard() {
    const [orders, setOrders] = useState([])
    let amount=0
    let order=0
    useEffect(()=>{
        db.collection('users').onSnapshot((snapshot)=>{
            snapshot.docs.forEach((data)=>
                db.collection('users').doc(data.id).collection('orders').onSnapshot((snapshot)=>{
                    snapshot.docs.forEach((doc)=>{
                        amount+=doc.data().amount
                        order++;
                        setOrders([amount, order])
                    })
                })
            )
        })
        
    }, [])
    console.log(orders[0])

    return (
        <div className="Dashboard">
            <div className="dashboard__body">
                <Sidebar />
                <div className="Card__Chart">
                <div className="card__container">
                    <DashBoardCard title="Orders" valued={orders[1]} image="https://img.icons8.com/plasticine/128/000000/add-shopping-cart.png" />
                    <DashBoardCard title="Customers" valued="10" image="https://img.icons8.com/fluent/128/000000/add-user-group-man-man.png" />
                    <DashBoardCard title="Products" valued="No lie" image="https://img.icons8.com/color/128/000000/grocery-shelf.png" /> 
                </div>
                <div className="Chart__container">
                        <LineChart />
                        <Widgets /> 
                </div> 
              </div>
           </div>
       </div>
    )
}

export default Dashboard
