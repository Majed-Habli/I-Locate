import React from "react";
import styles from "./footer.module.css";

export const Footer = () =>{
    return(
        <div className={styles.footer}>
            <div className={styles.row}>
                Address:<br/>
                Lebanon, Beirut,BDD<br/>
                Building 1442 "10th floor"
            </div>
            <div className={styles.row}>
                Email:<br/> 
                ILocate@info.io
            </div>
            <div className={styles.row}></div>
        </div>
    )
}