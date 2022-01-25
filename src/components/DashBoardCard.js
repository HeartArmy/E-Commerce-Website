import React from 'react';
import './DashBoardCard.css';

function DashBoardCard({title, valued, image}) {
    return (
        <div className="DashBoardCard">
           <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="image__edit" src={image} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <h1>{title}</h1>
                        <p>{valued}</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default DashBoardCard
