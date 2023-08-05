import React from "react";
import styles from "./home.module.css";

const Home = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.container_left}>
                <img src="/hero-map.png" alt="" />
            </div>
            <div className={styles.container_right}>
                <div className={styles.container_description}>
                    <h1>Interested in someone?<br/> <span>Let's find them !</span></h1>
                    <div>
                        <ul>
                            <li className={styles.description_list}>Add</li>
                            <li className={styles.description_list}>Remove</li>
                            <li className={styles.description_list}>and look up the positions of people you hold dear.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;