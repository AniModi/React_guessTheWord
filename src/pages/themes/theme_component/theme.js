import React from 'react';
import styles from './theme.module.css'
const Theme = (props) => {
    const redirect = (event) => {
        props.onClick(event);
    }
    return(
        <>
            <div className={styles.theme} onClick={redirect}>{props.theme.slice(0,1).toUpperCase()+props.theme.slice(1)}</div>
        </>
    );
}

export default Theme;