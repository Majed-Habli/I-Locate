import React, { useEffect, useState } from "react";
import styles from './add_contact.module.css';

export const AddContact = ({isPressed}) =>{

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    // const [isPressed, setIsPressed] = useState(isPressed);


    const AddContact = async () => {
        try{
            const body = {
                name: name,
                phone: phone,
                latitude: latitude,
                longitude: longitude
            }
            const parsebody = JSON.stringify(body);
            const response = await fetch("http://localhost:8000/api/insert_contact",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: parsebody
            });
            const data = await response.json();
            console.log(data);
            if(data.status === "success"){
                console.log(data);
                isPressed(prev => !prev)
            }else{
                console.log("failed to set data")
            }
        }catch(error){
            console.log("failed to call the api ",error);
        }
        
    }

    return(
        <div className={styles.body_container}>
            <div className={styles.input_container}>
                <h2>Add a contact</h2>
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
                    <button onClick={AddContact}>Add contact</button>  
                    {/* onClick={gunctionname} */}
                </div>
            </div>
        </div>
    )
}