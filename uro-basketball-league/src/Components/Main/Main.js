import React from 'react';
import fakeData from '../../fakeData/fackeData.json';
import { useEffect } from 'react';
import { useState } from 'react';
import Players from '../Players/Players';
import './Main.css';
import Team from '../Team/Team';



const Main = () => {
    const [players, setPlayers] = useState([]);
    // calling user defined fake data
    useEffect(() => {
        setPlayers(fakeData);
    }, []);
    //handling clicked opreation on select player button
    const [selectedTeam, setSelectedTeam] = useState([]);
    const handleTeamSelection = player => {
        const newTeam = [...selectedTeam, player];
        setSelectedTeam(newTeam);
    }

    return (
        <div className=" d-flex justify-content-center main-container">
            <div className=" row players-container">
                {/* players list segment */}
                {
                    players.map(player => <Players handleTeamSelection={handleTeamSelection} key={player.id} player={player}></Players>)
                }
            </div>
            <div className="text-light" >
                {/* Selected player segment(team) */}
                <Team selectedTeam={selectedTeam}></Team>
            </div>
        </div>
    );
};

export default Main;