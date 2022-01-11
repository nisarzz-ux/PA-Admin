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
  petaData('Sawahan',-7.2737626,112.7039424,1187,1104),
  petaData('Wonokromo',-7.2941241,112.7207974,1111,1002),
  petaData('Karang Pilang',-7.3320526,112.6686053,496,460),
  petaData('Dukuh Pakis',7.2915071,112.6828133,425,391),
  petaData('Wiyung',-7.3085221,112.6752149,600,562),
  petaData('Gayungan',-7.3280201,112.7092178,348,325),
  petaData('Wonocolo',-7.32494,112.7269134,550,504),
  petaData('Jambangan',-7.3239321,112.6980679,419,379)
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
            Peta Surabaya Wilayah Selatan
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
      <MapContainer center={[-7.2941241,112.7207974]} zoom={13} scrollWheelZoom={true}>
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