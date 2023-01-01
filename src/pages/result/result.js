import queryString from 'query-string';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from "./result.module.css"

const Result = () => {
    const history = useHistory()
    const redirect = (event)=>{
        history.push("/choose-theme")
    }
    const location = useLocation()
    const result = location.state;
    return(
        <>
        <div className={styles.container}>
            <div className={styles.result}>{
            result=="gameOver"?"Game Over!":"Congratulations, You Won!"
            }</div>
            <div className={styles.btns} onClick={redirect}>
            <div className={styles.btn}>{"PLAY AGAIN"}</div>
            </div>
        </div>
        </>
    );
}

export default Result;