import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from "./themes.module.css"
import Theme from './theme_component/theme';
import questions from "./../../questions.json"
import btnSound from "./../../sound/btn_click.mp3"

const themes = Object.keys(questions);
const clickSound = new Audio(btnSound)

const Themes = () => {
    const history = useHistory();
    const ind = Math.random();
    const redirect = (event) => {
        clickSound.play()
        setTimeout(()=>{
            history.push({pathname:"/play",state:{theme:event.target.textContent,ind:ind}})
        },100)
        
    }
    return (
    <>
    <div className={styles.container}>
        <h1 className={styles.title}>{"Choose Theme:"}</h1>
        <div className={styles.themes}>
        {themes.map( (th)=> <Theme onClick={redirect} theme={th} key={th}></Theme>)}
        </div>
    </div>
    </>
    );
};

export default Themes;
