import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from "./themes.module.css"
import Theme from './theme_component/theme';
import questions from "./../../questions.json"
const themes = Object.keys(questions);

const Themes = () => {
    const history = useHistory();
    const redirect = (event) => {
        history.push({pathname:"/play",search:"theme="+event.target.textContent})
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
