import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./game.module.css"
import Answer from './game_component/answer';
import Keyboard from './game_component/keyboard';
import Question from './game_component/question';
import queryString from 'query-string';
import questions from "./../../questions.json"
const Game = () => {
    const location = useLocation();
    var question = questions[queryString.parse(location.search)["theme"].toLowerCase()];
    question = question[Math.floor(Math.random()*question.length)];
    console.log(question);
    return(
        <>
        <div className={styles.container}>
        <Answer word={question["word"]}></Answer>
        <Question question={question["question"]}></Question>
        <Keyboard></Keyboard>
        </div>
        </>
    );
}

export default Game;