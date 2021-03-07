import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import TeamMembersInfo from '../TeamMembersInfo/TeamMembersInfo';
import './Team.css';

const Team = (props) => {
    const selectedTeam=props.selectedTeam;
    // calculating total salary for selected players
    const totalSalary=selectedTeam.reduce((sum,player)=> sum+player.salary, 0);

    return (
        //  showing selected players information on team
         <div className="players-container sticky-top d-flex justify-content-center col">
            <div className="card team-card">
                <div className="card-body">
                    <h3 className="text-center team-title">Team</h3>
                    <h5 ><FontAwesomeIcon icon={faUsers} /> Players Count: {selectedTeam.length}</h5>
                    <p><FontAwesomeIcon icon={faMoneyCheckAlt} /> Total Budget: ${totalSalary}</p>
                    <h5 className="team-title">Team Members list </h5>
                        {/* passing selected players to selectedTeam for displying therr info on team segment */}
                        {
                          selectedTeam.map(player=><TeamMembersInfo player={player}></TeamMembersInfo>)                   
                        }
                </div>
            </div>
         </div>
    );
};

export default Team;