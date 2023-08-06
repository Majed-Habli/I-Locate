import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import styles from './map.module.css'
import 'leaflet/dist/leaflet.css';  


export const Map = ({latitude_value, longitude_value}) =>{
    const Latitude = latitude_value;
    const Longitude = longitude_value;
    const key = `${latitude_value}-${longitude_value}`;

    return(
        <MapContainer  key={key} 
            center={{ lat: Latitude, lng: Longitude }}
            zoom={12}
            scrollWheelZoom={false} className={styles.map_container}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={{ lat: Latitude, lng: Longitude }}>
            </Marker>
        </MapContainer>
    )
}