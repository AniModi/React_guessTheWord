import React from 'react';
import styles from "./letter_block.module.css"

const LetterBlock = (props) => {
    const clickHandler = (event) => {
        props.onClick(event.target.textContent)
    }
    return(
        <>
        <div className={styles.container} onClick={clickHandler}>
            <div className={styles.btn}>
                <p className={styles.btnValue}>{props.alphabet}</p>
            </div>
        </div>
        </>
    );
}

export default LetterBlock;