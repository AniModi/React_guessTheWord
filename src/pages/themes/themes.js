import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from "./themes.module.css"
import Theme from './theme_component/theme';
import questions from "./../../questions.json"
const themes = Object.keys(questions);

const Themes = () => {
    const history = useHistory();
    const ind = Math.random();
    const redirect = (event) => {
        history.push({pathname:"/play",state:{theme:event.target.textContent,ind:ind}})
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
