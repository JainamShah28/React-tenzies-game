import React from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

import '../assets/style.css';

import Die from './Die.js';

function Main() {
    function rollDices() {
        const randArr = [];

        for (let i = 0; i < 10; i++) {
            randArr.push({
                value: Math.floor(Math.random() * 6 + 1),
                isHeld: false,
                id: nanoid()
            });
        }

        return randArr;
    }

    
    const [dies, setDies] = React.useState(rollDices()),
        diesValues = dies.map((item) => {
            return (
                <Die
                    value={item.value}
                    isHeld={item.isHeld}
                    key={item.id}
                    holdDice={() => holdDice(item.id)}
                />
            );
        }),
        [tenzies, setTenzies] = React.useState(false),
        [noOfRolls, setNoOfRolls] = React.useState(0),
        [highScore, setHighScore] = React.useState(0);

    React.useEffect(() => {
        const allHeld = dies.every(die => die.isHeld),
            firstValue = dies[0].value,
            allSameValue = dies.every(die => die.value === firstValue);
    
        if (allHeld && allSameValue) {
            setTenzies(true);
        }
    }, [dies]);

    React.useEffect(() => {
        let currHighScore = localStorage.getItem("highScore");

        if (!currHighScore) {
            localStorage.setItem("highScore", 0);
        }
        
        setHighScore(localStorage.getItem("highScore"));
    }, []);

    React.useEffect(() => {
        if (tenzies && (highScore == 0 || noOfRolls < highScore)) {
            localStorage.setItem("highScore", noOfRolls);
            setHighScore(noOfRolls);
        }
    }, [tenzies]);
    
    function generateArray() {
        if (!tenzies) {
            setDies((prevDies) => {
                return prevDies.map((item) => {
                    return item.isHeld ? item : {
                        value: Math.floor(Math.random() * 6 + 1),
                        isHeld: false,
                        id: nanoid()
                    }
                });
            });

            setNoOfRolls(prevNoOfRolls => prevNoOfRolls + 1);
        } else {
            setTenzies(false);
            setDies(rollDices());
            setNoOfRolls(0);
        }
    }

    function holdDice(id) {
        setDies((prevDies) => {
            return prevDies.map((item) => {
                return id === item.id ? 
                {...item, isHeld: !item.isHeld} :
                item
            });
        });
    }

    return (
        <div className="box-border w-full max-w-[640px] bg-[#F5F5F5] rounded-md flex flex-col justify-center items-center py-12 overflow-x-hidden">
            {tenzies && <Confetti />}

            <h1 className="box-border text-center font-bold text-3xl">Tenzies</h1>
            <p className="box-border text-center px-12 mt-2">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            <div className="dices-container box-border grid grid-cols-5 gap-4 lg:gap-8 mt-8 lg:mt-12">
                {diesValues}
            </div>

            <button className="box-border bg-[#5035FF]  hover:bg-[#4e37e4] text-white font-bold py-2 px-4 rounded-md shadow-xl mt-8 lg:text-lg lg:px-6 lg:mt-12" onClick={generateArray}>
                {tenzies ? "New Game" : "Roll"}
            </button>

            <div className="score-card box-border w-full flex justify-between items-center mt-8 lg:mt-12 px-12 text-lg">
                <p className="rolls box-border font-bold text-red-700">Score: <span className="font-normal text-black text-base">{noOfRolls} Rolls</span></p>
                <p className="high-score box-border font-bold text-red-700">High score: <span className="font-normal text-black text-base">{highScore} Rolls</span></p>
            </div>
        </div>
    )
}

export default Main;