import React from "react";
import styles from "./card.module.css";

export const Card = ({contact,onClick}) =>{
    return(
        <div className={styles.card_container} onClick={onClick}>
            <div className={styles.text_container}>
                <div className={styles.contact_name}>{contact.name}</div>
                <div className={styles.contact_details}>
                    <div>Phone number: {contact.phone}</div>
                    <div>Longitude: {contact.longitude}</div>
                    <div>Latitude: {contact.latitude}</div>
                </div>
            </div>
        </div>
    )
}