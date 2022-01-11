import React from "react";
import { MapContainer,Marker,Popup, TileLayer} from 'react-leaflet';
import './Map.css';


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
  petaData('Genteng',-7.2604021,112.7257404,355,555 ),
  petaData('Bubutan',-7.2466056,112.7203012,566,520 ),
  petaData('Simokerto',-7.2396536,112.7447412,398,353 ),
  petaData('Pabean Cantian',-7.2222461,112.7150563,351,323),
  petaData('Semampir',-7.214467,112.7312914,548,501),
  petaData('Krembangan',-7.2271172,112.7069053,774,711),
  petaData('Bulak',-7.2322095,112.7710484,270,254),
  petaData('Kenjeran',-7.2162706,112.7543833,724,671),
  petaData('Tambaksari',-7.2509696,112.7519789,1376,1274),
  petaData('Gubeng',-7.2844421,112.7432514,1041,962),
  petaData('Rungkut',-7.3164155,112.7664958,1018,961),
  petaData('Tenggilis',-7.3203719,112.7534341,391,354),
  petaData('Gunung Anyar',-7.3383321,112.7572309,411,378),
  petaData('Sukolilo',-7.2905636,112.7692648,681,651),
  petaData('Mulyorejo',-7.2683192,112.7762518,656,613),
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
      <div className = "petaBox">
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
    </div>
    )
}