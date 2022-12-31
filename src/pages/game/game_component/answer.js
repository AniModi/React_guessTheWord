import React from 'react';
import styles from "./answer.module.css";
import Word from './word';

const Answer = (props) => {
    const word = props.word.split(" ");
    console.log(word);
    return (
        <>
        <div className={styles.container}>
            {word.map((w) => <Word word={w} key={w}></Word>)}
        </div>
        </>
    );
}

export default Answer;