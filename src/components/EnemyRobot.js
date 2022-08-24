import React, { useState, useEffect } from 'react';
import names from  'random-names-generator';


function EnemyRobot(props) {
    const  [randomName,  setRandomName]  =  useState(null);

    useEffect(()  => {
        let name = names.random();

        setRandomName(name)
    }, [])

    return (
        <div className="enemy-robot">
            <h1>Your enemy</h1>
            <h1>{randomName}</h1>
            <img src={`https://robohash.org/${randomName}.png`} alt="Your Robot img"/>
            <p className="robot-power">POWER: ⚡  <p className='enemy-robot-power'> {props.enemyPower} </p>  ⚡</p>
        </div>
    )
}

export default EnemyRobot