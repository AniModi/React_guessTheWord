import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from "./game.module.css"
import Answer from './game_component/answer';
import Keyboard from './game_component/keyboard';
import Question from './game_component/question';
import questions from "./../../questions.json"
import Lives from './lives';
const Game = () => {
    const location = useLocation();
    const history = useHistory();
    const questionArray = questions[location.state["theme"].toLowerCase()];
    const [question,setQuestion] = useState(questionArray[Math.floor(location.state["ind"]*questionArray.length)]);
    const [lives,setLives] = useState(5);
    const [lettersToWin,setLettersToWin] = useState(new Set(question["word"].toLowerCase()).size);
    const [gameStatus,setGameStatus] = useState("running");
    useEffect(()=>{
        if(localStorage.getItem("question")===null){
            const q = questionArray[Math.floor(Math.random()*questionArray.length)];
            setQuestion(q)
            localStorage.setItem("question",q);
        }
        if(lives===0){
                localStorage.removeItem("question");
                setGameStatus("gameOver");
            }
        if(lettersToWin===0){
            localStorage.removeItem("question");
            setGameStatus("gameWon");
        }
    },[lives,lettersToWin,questionArray]);
    console.log(lettersToWin);
    useEffect(()=>{
        setTimeout(()=>{
            if(gameStatus==="gameOver"){
                history.push({pathname:"/result",state:"gameOver"})
            }
            else if(gameStatus==="gameWon"){
                history.push({pathname:"/result",state:"gameWon"})
            }
        },500);
    },[gameStatus,history])

    const [userInput,setUserInput] = useState([]);
    const clickHandler = (char) =>{
        const temp = [...userInput];
        if(!userInput.includes(char) && (question["word"].includes(char.toLowerCase()) || question["word"].includes(char))){
            temp.push(char);
            setLettersToWin(lettersToWin-1);
        }
        if(!question["word"].includes(char) && !question["word"].includes(char.toLowerCase())){
            setLives(lives-1);
        }
        setUserInput(temp);
    }
    return(
        <>
        <div className={styles.game}>
        <Lives life={lives}></Lives>
        <div className={styles.container}>
        <Answer word={question["word"]} input={userInput}></Answer>
        <Question question={question["question"]}></Question>
        <Keyboard onClick={clickHandler}></Keyboard>
        </div>
        </div>
        </>
    );
}

export default Game;