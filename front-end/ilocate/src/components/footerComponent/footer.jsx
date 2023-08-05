import React from "react";
import styles from "./footer.module.css";

export const Footer = () =>{
    return(
        <div className={styles.footer}>
            <div className={styles.row}>
                <p>Phone:<br/>
                    <span>+961 675 211</span>
                </p>
            </div>
            <div className={styles.row}>
                <p>Address:<br/>
                    <span>Lebanon, Beirut,BDD<br/>
                    Building 1442 "10th floor"</span>
                </p>
            </div>
            <div className={styles.row}>
                <p>Email:<br/> 
                    <span>ILocate@info.io</span>
                </p>
            </div>
            <div className={styles.button}></div>
        </div>
    )
}