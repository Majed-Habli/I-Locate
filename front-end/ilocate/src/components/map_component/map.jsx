import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import styles from './map.module.css'

export const Map = ({latitude_value, longitude_value}) =>{
    const Latitude = latitude_value;
    const Longitude = longitude_value;
    return(
        <MapContainer 
            center={{ lat: Latitude, lng: Longitude }}
            zoom={13}
            scrollWheelZoom={false} className={styles.map_container}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={{ lat: Latitude, lng: Longitude }}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
        </MapContainer>
    )
}