import React from 'react';
import styles from "./letter_block.module.css"

const LetterBlock = (props) => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.btn}>
                <p className={styles.btnValue}>{props.alphabet}</p>
            </div>
        </div>
        </>
    );
}

export default LetterBlock;