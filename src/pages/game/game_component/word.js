import React from 'react';
import BlankLetter from './blank_letter';
import styles from "./word.module.css"


const Word = (props) => {
    const word = props.word.split('');
    const input = props.input;
    return (
        <>
        <div className={styles.container}>
            {word.map((l,index) => {
                if(input.includes(l) || input.includes(l.toUpperCase()))
                    return <BlankLetter key={index} word={l}></BlankLetter>
                else
                return <BlankLetter key={index} word={" "}></BlankLetter>
            })}
        </div>
        </>
    );
}

export default Word;