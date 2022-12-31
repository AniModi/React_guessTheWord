import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from "./home.module.css"

const Home = () => {
    const history = useHistory();
    const redirect = () => {
        history.push("/choose-theme")
    }
    return (
        <>
        <div className={styles.container}>
            <h1 className={styles.title}>{"Guess The Word!!"}</h1>
            <button className={styles.btn} onClick={redirect}>{"Play"}</button>
            {/* <button className={styles.btn}>{"Exit"}</button> */}
        </div>
        </>
    );
}

export default Home;