import React from 'react';
import styles from "./question.module.css"

const Question = (props) => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.question}>
                {
                    props.question
                }
            </div>
        </div>
        </>
    );
}

export default Question;