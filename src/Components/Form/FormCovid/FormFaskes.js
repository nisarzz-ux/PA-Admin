import React,{useState} from 'react';
import {Form , Button , Alert } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import swal from 'sweetalert';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import './Form.css';

function FormFaskes(){

    const[kecamatan,setKecamatan] = React.useState();
    const[bagian_wilayah,setBagianWilayah] = React.useState();
    const[jenis_faskes,setJenisFaskes] = React.useState();
    const[alamat,setAlamat] = React.useState();
    const[status,setStatus] = React.useState();
    const[latKoordinat,setlatKoordinat] = React.useState();
    const[longKoordinat,setlongKoordinat] = React.useState();

    const history = useHistory();
    
    
    const TabelFaskes = {
        kecamatan,
        bagian_wilayah,
        jenis_faskes,
        alamat,
        status,
        latKoordinat,
        longKoordinat
    };

    function submit(e){
       e.preventDefault();
       console.log(TabelFaskes);
       axios.post('http://127.0.0.1:8000/api/faskesTabel/input',
            TabelFaskes
       )
       .then
       (res => {
           console.log(res)
           swal({
            title: "Data Berhasil di masukan!",
            text: "Click the Button!",
            icon: "success",
            button: "back",
           })
           history.push("/TableFaskes")
           
       })
       .catch(error => {
           console.log(error)
           swal({
            title: "Data gagal di masukan!",
            text: "Click the Button!",
            icon: "error",
            button: "back",
           })
        })
    }
    return(      
            <div className="InputPenduduk">
                
                <Form style={{
                    marginTop:"5vw",
                    marginLeft:"20vw",
                    marginRight:"20vw"
                }}>
                    <Form.Group className="mb-1">
                        <Form.Label> Masukan Kecamatan </Form.Label>
                        <Form.Control type="text" placeholder="Masukan Kecamatan"  onChange = {e => setKecamatan(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Masukan Bagian Wilayah </Form.Label>
                        <Form.Select type="text" onChange = {e => setBagianWilayah(e.target.value)} >
                            <option>Pilih Bagian Wilayahnya</option>
                            <option value="Surabaya Utara" >Surabaya Utara</option>
                            <option value="Surabaya Selatan">Surabaya Selatan</option>
                            <option value="Surabaya Barat">Surabaya Barat</option>
                            <option value="Surabaya timur">Surabaya timur</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Input Jenis Faskes </Form.Label>
                        <Form.Select type="text" onChange = {e => setJenisFaskes(e.target.value)} >
                            <option>Pilih Jenis Faskes</option>
                            <option value="Puskesmas" >Puskesmas</option>
                            <option value="Rumah Sakit">Rumah Sakit</option>
                            <option value="Apotik">Apotik</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Alamat Faskes  </Form.Label>
                        <Form.Control type="text" placeholder="Masukan Alamat Faskes" onChange = {e => setAlamat (e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Status Faskes </Form.Label>
                        <Form.Select type="text" onChange = {e => setStatus(e.target.value)} >
                            <option>Status Faskes Faskes</option>
                            <option value="Ready" >Ready</option>
                            <option value="Penuh">Penuh</option>
                            <option value="Tidak Ada">Tidak Ada</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Masukan Posisi Koordinat Lattiude </Form.Label>
                        <Form.Control type="text" placeholder="Masukan Koordinat Lat" onChange = {e => setlatKoordinat (e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Masukan Posisi Koordinat Longttiude </Form.Label>
                        <Form.Control type="text" placeholder="Masukan Koordinat Lat" onChange = {e => setlongKoordinat (e.target.value)}/>
                    </Form.Group>
                    

                    <Button variant = "primary" size="sg" style={{width : "15vw"}} onClick={submit}> 
                        Submit Data 
                    </Button>
            </Form>
        </div>
    );
}

export default FormFaskes ;