import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Players.css';

const Players = (props) => {
    // destructuring player object
    const {img,name,gamesPlayed,salary}=props.player;
    const [isClicked, setIsClicked]=useState(false);
    return (
        // displaying players list
        <div className="players-container d-flex  justify-content-center col mt-4">
            <div className="card bg-warning" style={{width:'18rem',borderRadius:'10px'}}>
                <img src={img} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon icon={faUser} /> Name: {name}</h5>
                    <p className="card-text"><FontAwesomeIcon icon={faBasketballBall} /> Games Played: {gamesPlayed}</p>
                    <p className="card-text"><FontAwesomeIcon icon={faMoneyCheckAlt} /> Salary: ${salary}</p>
                    <button className="btn btn-danger" disabled={isClicked} onClick={()=>{props.handleTeamSelection(props.player); setIsClicked(true)}}><FontAwesomeIcon icon={faUserPlus} /> {isClicked ? "Already Selected" : "Select Player"}</button>
                </div>
            </div>
         </div>
    );
};

export default Players;