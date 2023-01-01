import React from 'react';
import styles from "./blank_letter.module.css"

const BlankLetter = (props) => {
    return(
        <>
        <div className={styles.container}>
            {props.word}
        </div>
        </>
    );
}

export default BlankLetter;