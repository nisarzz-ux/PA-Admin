import React,{useState,useEffect} from "react";
import { CircleMarker, MapContainer,Marker,Popup, TileLayer} from 'react-leaflet';
import './Map.css';
import axios from 'axios';
import swal from 'sweetalert';

const redOptions = {color: 'red'}

export default function Peta(){

    const [data,setData] = useState([]);

    useEffect(() => {
      getData()
    },[]);

    function getData(){
        axios.get('http://127.0.0.1:8000/api/demografi').then((response) => {
          swal({
              title: "Selamat Datang Pada Peta Kota Surabaya!",
              text: "klik Tombol Kembali!",
              icon: "success",
              button: "Kembali",
           })
          setData(response.data);
          console.log(response.data)
        })
    }


    return(
      <div className = "petaBox">
      <MapContainer center={[-7.223690, 112.775000]} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((row => 
          <Marker position={[row.latKoordinat, row.longKoordinat]}>
            <Popup >
            {row.kecamatan} <br /> Penduduk Laki : {row.penduduk_laki} <br /> Penduduk Perempuan {row.penduduk_wanita}
            </Popup>
          </Marker>
      ))}

      

    </MapContainer>
    </div>
    )
}