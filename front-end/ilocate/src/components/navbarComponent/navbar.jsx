import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () =>{
    return(
        <div className={styles.navbar}>
            <div className={styles.title_container}>
                <img src="/logo.png" alt="logo_image"/>
                <div className={styles.title}>I-Locate</div>
            </div>
            <div className={styles.links}>
                <Link to="/" className={styles.nav_link}>Home</Link>
                <Link to="/login" className={styles.nav_link}>Login</Link>
            </div>
        </div>
    )
}