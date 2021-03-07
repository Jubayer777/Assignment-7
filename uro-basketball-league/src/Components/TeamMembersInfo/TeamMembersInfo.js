import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
const TeamMembersInfo = (props) => {
    // destructuring selected players array
    const {name,salary}=props.player;
    return (
        <div>
            <li>{name}</li>
            <p className="pl-4"><small><FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}</small></p>
        </div>
    );
};

export default TeamMembersInfo;