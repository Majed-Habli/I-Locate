import React from "react";
import styles from "./login.module.css";
import { Footer } from "../../components/footerComponent/footer";

const Login = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.container_left}>
                <img src="/hero-map.png" alt="" />
            </div>
            <div className={styles.container_right}>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Login;