import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Card } from "../../components/card_component/card";
import { Map } from "../../components/map_component/map";
import { AddContact } from "../../components/add_contact_component/add_contact";

const Home = () =>{
    const [contacts, setContact] = useState([]);
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [isPopUpVisible, setPopUpVisible] = useState(false);

    useEffect(()=>{
        fetchContactData();
    },[]);

    const fetchContactData = async () => {
        try{
            const response = await fetch("http://localhost:8000/api/contacts",{
            method:"GET",
            });
            const data = await response.json();
            if(data.status === "successfully got the contact"){
                setContact(data.data);
            }else{
                console.log("failed to set data")
            }
        }catch(error){
            console.log("failed to call the api ",error);
        }
        
    }

    const viewMap = (longitude,latitude)=>{
        setLongitude(longitude);
        setLatitude(latitude);
        // console.log(latitude);
        // console.log(longitude);
    }

    const showPopUp=()=>{
        setPopUpVisible(true)
    }
    return(
        <div className={styles.container}>
            <div className={styles.button}>
                <img src="/add.png" alt="add image" onClick={showPopUp}/>
            </div>
            <div className={styles.card_container}>
                {contacts.map(contact=>(
                <Card
                key={contact.id}
                contact={contact}
                onClick={() => {
                viewMap(contact.longitude, contact.latitude);
                }}
            ></Card>
                ))}
            </div>
            <div>
                <Map latitude_value={latitude} longitude_value={longitude}/>
            </div>
            <div>
                {isPopUpVisible && <AddContact/>}
            </div>
            
        </div>
    )
}

export default Home;