import React from "react";
import styles from "./card.module.css";

export const Card = ({contact,isPressed}) =>{
    return(
        <div className={styles.card_container}>
            <div className={styles.text_container} onClick={isPressed}>
                <div className={styles.contact_name}>{contact.name}</div>
                <div className={styles.contact_details}>
                    <div>Phone number: {contact.phone}</div>
                    <div>Longitude: {contact.longitude}</div>
                    <div>Latitude: {contact.latitude}</div>
                </div>
                {/* <div className={styles.button_container}>
                    <button>Locate</button>
                </div> */}
            </div>
        </div>
    )
}