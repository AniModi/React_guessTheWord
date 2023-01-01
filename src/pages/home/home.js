import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from "./home.module.css"
import btnSound from "./../../sound/btn_click.mp3"
const clickSound = new Audio(btnSound)
const Home = () => {
    const history = useHistory();
    const redirect = () => {
        clickSound.play()
        setTimeout(()=>{
            history.push("/choose-theme")
        },500)
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