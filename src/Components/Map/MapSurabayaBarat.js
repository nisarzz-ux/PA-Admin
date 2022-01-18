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
  petaData('Sukomanunggal', -7.263860 ,112.697360, 570, 520),
  petaData('Tandes', -7.260540 , 112.683830 ,491, 460),
  petaData('Asemrowo',-7.246010 , 112.707080 , 209, 198),
  petaData('Benowo' ,-7.249860 , 112.643360 , 437 , 408),
  petaData('Pakal',-7.215410 , 112.606090, 365, 343 ),
  petaData('Lakasantri',-7.322583 , 112.6178609 ,337,314 ) ,
  petaData('Sambikerep',-7.2750796, 112.6377688,455,423 ),
  
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
            Peta Surabaya Wilayah Barat
          </Typography>
          
          <Button href='/' variant="contained" color="warning" size='small' 
          sx ={{marginRight:1}}>
              Menu Utama
            </Button>
          
          <Button href='/Timeline' 
          variant="contained" 
          color="error" 
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
          <MapContainer center={[-7.263860 ,112.697360]} zoom={13} scrollWheelZoom={true}>
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