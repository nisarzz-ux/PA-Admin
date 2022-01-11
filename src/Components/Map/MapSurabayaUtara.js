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
  
  petaData('Pabean Cantian',-7.2222461,112.7150563,351,323),
  petaData('Semampir',-7.214467,112.7312914,548,501),
  petaData('Krembangan',-7.2271172,112.7069053,774,711),
  petaData('Bulak',-7.2322095,112.7710484,270,254),
  petaData('Kenjeran',-7.2162706,112.7543833,724,671),
 
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
            Peta Surabaya Wilayah Utara
          </Typography>
          
          <Button href='/' variant="contained" color="warning" size='small' 
          sx ={{marginRight:1}}>
              Kembali
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
      <MapContainer center={[-7.223690, 112.775000]} zoom={13} scrollWheelZoom={true}>
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