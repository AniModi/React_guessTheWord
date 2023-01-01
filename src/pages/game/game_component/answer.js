import React from 'react';
import styles from "./answer.module.css";
import Word from './word';

const Answer = (props) => {
    const word = props.word.split(" ");
    return (
        <>
        <div className={styles.container}>
            {word.map((w,index) => <Word word={w} key={index} input={props.input}></Word>)}
        </div>
        </>
    );
}

export default Answer;