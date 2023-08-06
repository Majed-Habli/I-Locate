import React, { useState } from "react";
import styles from "./card.module.css";

export const AddContact = () =>{

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    return(
        <div className={styles.body_container}>
            <div className={styles.input_container}>
                <h2>Welcom back!</h2>
                <div className={styles.row}>
                    <label className="label">Name: </label>
                    <input value={name} onChange={ e=> setName(e.target.value) }/>
                </div>
                <div className={styles.row}>
                    <label className="label">Phone: </label>
                    <input value={phone} onChange={ e=> setPhone(e.target.value) }/>
                </div>
                <div className={styles.col}>
                    <div className={styles.row}>
                        <label className="label">Longitude: </label>
                        <input value={longitude} onChange={ e=> setLongitude(e.target.value) }/>
                    </div>
                    <div className={styles.row}>
                        <label className="label">Latitude: </label>
                        <input value={latitude} onChange={ e=> setLatitude(e.target.value) }/>
                    </div>
                </div>
                
                <div className={styles.button}>
                    <button >log in</button>  
                    {/* onClick={gunctionname} */}
                </div>
            </div>
        </div>
    )
}