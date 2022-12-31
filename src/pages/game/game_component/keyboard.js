import React from 'react';
import styles from "./keyboard.module.css"
import Letter_block from './letter_block';

const keyboard  = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];



const Keyboard = () => {
    return(
        <>
        <div className={styles.container}>
        <div className={styles.row}>{keyboard.slice(0,10).map((alph)=><Letter_block alphabet={alph} key={alph}></Letter_block>)}</div>
        <div className={styles.row}>{keyboard.slice(10,19).map((alph)=><Letter_block alphabet={alph} key={alph}></Letter_block>)}</div>
        <div className={styles.row}>{keyboard.slice(19).map((alph)=><Letter_block alphabet={alph} key={alph}></Letter_block>)}</div>
        </div>
        </>
    );
}

export default Keyboard;