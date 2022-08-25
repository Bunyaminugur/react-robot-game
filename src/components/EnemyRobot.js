import React, { useState, useEffect } from 'react';
import names from  'random-names-generator';


function EnemyRobot(props) {
    const  [randomName,  setRandomName]  =  useState(null);

    useEffect(()  => {
        let name = names.random();

        setRandomName(name)
    }, [])

    const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

    return (
        <div className="enemy-robot">
            <h2>Your enemy</h2>
            <h1 className="random-name-generator">{randomName}</h1>
            <img src={`https://robohash.org/${randomName}.png`} alt="Your Robot img"/>
            <p className="hover-enemy-power" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Hover to see enemy power</p>
            <p className="robot-power enemy-robot-power">POWER: ⚡ {isHovering && <div>{props.enemyPower}</div>} ⚡</p>
        </div>
    )
}

export default EnemyRobot