import React from "react";
import { MapContainer,Marker,Popup, TileLayer} from 'react-leaflet';
import { Box } from '@mui/material';
import './Map.css';

export default function Peta(){
     
    return(
      <Box maxWidth={100}>
      <MapContainer center={[-7.223690, 112.775000]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker position={[-7.223690, 112.775000]}>
        <Popup >
          Kecamatan Kenjeran <br /> Positif : 2000 kasus <br /> Negatif: 100 kasus
        </Popup>
      </Marker>

      <Marker position={[-7.299890, 112.803436]}>
        <Popup >
          Keluruhan Sukolilo Baru<br /> Positif : 200 kasus <br /> Negatif: 10 kasus
        </Popup>
      </Marker>

    </MapContainer>
    </Box>
    )
}