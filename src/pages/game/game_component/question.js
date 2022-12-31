import React from 'react';
import styles from "./question.module.css"

const Question = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.question}>
                {
                    "What is the capital of Ukraine?"
                }
            </div>
        </div>
        </>
    );
}

export default Question;