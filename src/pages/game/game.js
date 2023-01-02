import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./game.module.css";
import Answer from "./game_component/answer";
import Keyboard from "./game_component/keyboard";
import Question from "./game_component/question";
import questions from "./../../questions.json";
import Lives from "./lives";
import correct from "./../../sound/correct.mp3";
import wrong from "./../../sound/wrong.mp3";
import gameOver from "./../../sound/gameOver.mp3";
import gameWin from "./../../sound/gameWin.mp3";

const correctSound = new Audio(correct);
const wrongSound = new Audio(wrong);
const gameOverSound = new Audio(gameOver);
const gameWinSound = new Audio(gameWin);

const Game = () => {
  const location = useLocation();
  const history = useHistory();
  const questionArray = questions[location.state["theme"].toLowerCase()];
  const [question, setQuestion] = useState(
    questionArray[Math.floor(location.state["ind"] * questionArray.length)]
  );
  const [lives, setLives] = useState(5);
  const [lettersToWin, setLettersToWin] = useState(
    new Set(question["word"].replace(/\s/g,'').toLowerCase()).size
  );
  const [gameStatus, setGameStatus] = useState("running");
  useEffect(() => {
    if (localStorage.getItem("question") === null) {
      const q = questionArray[Math.floor(Math.random() * questionArray.length)];
      setQuestion(q);
      setLettersToWin(new Set(q["word"].replace(/\s/g,'').toLowerCase()).size);
      localStorage.setItem("question", q);
    }
    if (lives === 0) {
      localStorage.removeItem("question");
      setGameStatus("gameOver");
    }
    if (lettersToWin === 0) {
      localStorage.removeItem("question");
      setGameStatus("gameWon");
    }
  }, [lives, lettersToWin, questionArray,question]);
  useEffect(() => {
    setTimeout(() => {
      if (gameStatus === "gameOver") {
        gameOverSound.play();
        history.push({ pathname: "/result", state: "gameOver" });
      } else if (gameStatus === "gameWon") {
        gameWinSound.play();
        history.push({ pathname: "/result", state: "gameWon" });
      }
    }, 500);
  }, [gameStatus, history]);
  const [userInput, setUserInput] = useState([]);
  const [isDisable,setIsDisable] = useState(false);
  const clickHandler = (char) => {
    if(isDisable)return;
    const temp = [...userInput];
        if (
          !userInput.includes(char) &&
          (question["word"].includes(char.toLowerCase()) ||
            question["word"].includes(char))
        ) {
          correctSound.play();
          temp.push(char);
          setLettersToWin(lettersToWin - 1);
        }
        if (
          !question["word"].includes(char) &&
          !question["word"].includes(char.toLowerCase()) && !userInput.includes(char)
        ) {
          wrongSound.play();
          setLives(lives - 1);
        }
        setUserInput(temp);
        setIsDisable(true)
        setTimeout(()=>setIsDisable(false),1000);
        console.log(char);
  };
  return (
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
};

export default Game;
