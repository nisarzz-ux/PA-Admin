import React from "react";
import { MapContainer,Marker,Popup, TileLayer} from 'react-leaflet';
import {
  AppBar,Box,Toolbar,Typography,
  Button,IconButton
} from '@mui/material';



function petaData (Kecamatan , posisiLat , posisiLong , Positif , Sembuh ) {
  return {Kecamatan, posisiLat , posisiLong, Positif, Sembuh };
}

const rows = [
  petaData('Tambaksari',-7.2509696,112.7519789,1376,1274),
  petaData('Gubeng',-7.2844421,112.7432514,1041,962),
  petaData('Rungkut',-7.3164155,112.7664958,1018,961),
  petaData('Tenggilis',-7.3203719,112.7534341,391,354),
  petaData('Gunung Anyar',-7.3383321,112.7572309,411,378),
  petaData('Sukolilo',-7.2905636,112.7692648,681,651),
  petaData('Mulyorejo',-7.2683192,112.7762518,656,613),
  
];


export default function Peta(){
     
    return(
      <div>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Peta Surabaya Wilayah Timur
          </Typography>
          
          <Button href='/' variant="contained" color="warning" size='small' 
          sx ={{marginRight:1}}>
              Menu Utama
            </Button>
          
          <Button href='/Timeline' 
          variant="contained" 
          color="info" 
          size='small'
          sx ={{marginRight:1}}
          >
              Lihat TimeLine
            </Button>

            <Button href='/GrafikCoba' variant="contained" color="success" size='small'>
              Lihat Diagram
            </Button>

        </Toolbar>
      </AppBar>
    
      <Box sx={{
        marginTop:"5vw",
        marginLeft:"15vw"
        }}>
      <MapContainer center={[-7.2509696,112.7519789]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {rows.map((row => 
          <Marker position={[row.posisiLat, row.posisiLong]}>
            <Popup >
            {row.Kecamatan} <br /> Positif : {row.Positif} <br /> Negatif: {row.Sembuh}
            </Popup>
          </Marker>
      ))}
    </MapContainer>
    </Box>
    </div>
    )
}