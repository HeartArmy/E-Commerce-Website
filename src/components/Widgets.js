import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const eventsArticle = (heading, subtitle)=>(
        <div className="widgets__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>New Events</h2>
                <InfoIcon />
            </div>
            {eventsArticle("A new user joined", "Email:gideoakosah37@gmail.com")}
            {eventsArticle("A new order was placed", "OrderId:#23456532")}
            {eventsArticle("A new vendor was added", "VendoId:124554424")}
            {eventsArticle("A new user joined", "Email:amos@gmail.com")}
            {eventsArticle("A new user joined", "Email:caleb@gmail.com")}
        </div>
    )
}

export default Widgets

