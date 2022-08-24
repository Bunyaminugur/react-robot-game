import React, { useState } from 'react';

function CreateRobot(props) {

    const [robotName, setRobotName] = useState('alex');

    let yourPower = Math.floor((Math.random() * 100) + 1);

    const handleChange = (event) => {
        if(event.key === 'Enter') {
        setRobotName(event.target.value);
        }
      };

    const fightClickButton = () => {
        if(yourPower > props.enemyPower) {
            alert('You win')
        }
        else if ( props.enemyPower > yourPower ){
            alert('You lose')
        } else {
            alert('DRAW')
        }

    }

    return (
        <div className="your-robot-container">
            <div className="your-robot">
            <h3>Name your Robot and press enter</h3>
            <input type="text" placeholder="Your Robot Name" id="robotName" onKeyPress={handleChange}/>
            <img className='your-robot-img' src={`https://robohash.org/${robotName}.png`} alt="Your Robot img"/>
            <p className="robot-power" onKeyPress={handleChange}>POWER: ⚡  {yourPower}  ⚡</p>
            </div>
            <div>
            <h3>hi</h3>
            <button onClick={fightClickButton}  className="fight-button">FIGHT</button>
            </div>
        </div>
    )
}

export default CreateRobot