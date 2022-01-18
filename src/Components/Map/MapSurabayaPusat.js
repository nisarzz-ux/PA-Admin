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
  petaData('Genteng',-7.2604021,112.7257404,355,555 ),
  petaData('Bubutan',-7.2466056,112.7203012,566,520 ),
  petaData('Simokerto',-7.2396536,112.7447412,398,353 ),
  
];


export default function Peta(){
     
    return(
      <div >

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
            Peta Surabaya Wilayah Pusat
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
        marginLeft:"1vw"
        }}>
      <MapContainer center={[-7.2466056,112.7203012]} zoom={13} scrollWheelZoom={true}>
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