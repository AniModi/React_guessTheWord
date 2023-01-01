import React from 'react';
import styles from "./lives.module.css"
const life = [styles.one,styles.two,styles.three,styles.four,styles.five]

const Lives = (props) => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.lives}>
                <div className={`${styles.bar} ${life[4-props.life]}`}></div>
            </div>
        </div>
        </>
    );
}

export default Lives;