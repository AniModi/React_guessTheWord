import React from 'react';
import styles from "./result.module.css"

const Result = () => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.result}>{"Game Over!"}</div>
            <div className={styles.btns}>
            <div className={styles.btn}>{"PLAY AGAIN"}</div>
            <div className={styles.btn}>{"EXIT"}</div>
            </div>
        </div>
        </>
    );
}

export default Result;