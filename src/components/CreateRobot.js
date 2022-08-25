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
            return document.getElementById('fightResult').innerText = "🎉  You Won 🎉"
        }
        else if ( props.enemyPower > yourPower ){
            return document.getElementById('fightResult').innerText = "You Lose"
        } else {
            return document.getElementById('fightResult').innerText = "DRAW"
        }
    }

    const playAgainButton = () => {
        return window.location.reload(false);
    }

    console.log(fightClickButton)

    return (
        <div className="your-robot-container">
            <div className="your-robot">
                <h4>Name your robot and press enter</h4>
                <input type="text" placeholder="Your Robot Name" id="robotName" onKeyPress={handleChange}/>
                <img className='your-robot-img' src={`https://robohash.org/${robotName}.png`} alt="Your Robot img"/>
                <p className="robot-power" onKeyPress={handleChange}>POWER: ⚡  {yourPower}  ⚡</p>
            </div>
            <div className='result-section-container'>
                <h3 className='fight-result' id='fightResult'></h3>
                <button onClick={fightClickButton}  className="fight-button">FIGHT </button>
                <button onClick={playAgainButton} className="fight-button play-againg-button">Play again </button>
            </div>
        </div>
    )
}

export default CreateRobot