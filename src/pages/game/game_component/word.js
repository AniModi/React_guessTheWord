import React from 'react';
import BlankLetter from './blank_letter';
import styles from "./word.module.css"


const Word = (props) => {
    const word = props.word.split('');
    return (
        <>
        <div className={styles.container}>
            {word.map((l,index) => <BlankLetter key={index}></BlankLetter>)}
        </div>
        </>
    );
}

export default Word;