import React,{useState} from 'react';
import {Form , Button , Alert } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import swal from 'sweetalert';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import './Form.css';

function FormSeptember(){

    const[kecamatan,setKecamatan] = React.useState();
    const[bagian_wilayah,setBagianWilayah] = React.useState();
    const[positif,setPositif] = React.useState();
    const[sembuh,setSembuh] = React.useState();
    const[mati,setMati] = React.useState();
    const[rawat,setRawat] = React.useState();
    const[Tanggal,setTanggal] = React.useState(new Date());

    const history = useHistory();
    
    
    const TabelSeptember = {
        kecamatan,
        bagian_wilayah,
        positif,
        sembuh,
        mati,
        rawat,
        Tanggal
    };

    function submit(e){
       e.preventDefault();
       console.log(TabelSeptember);
       axios.post('http://127.0.0.1:8000/api/septemberTabel/input',
            TabelSeptember
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
           history.push("/TableSeptember")
           
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
                        <Form.Label> Input Jumlah Kasus Positif Virus Covid-19 </Form.Label>
                        <Form.Control type="text" placeholder="Masukan Jumlah Kasus" onChange = {e => setPositif (e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Input Jumlah Sembuh dari Virus Covid-19  </Form.Label>
                        <Form.Control type="text" placeholder="Masukan Jumlah yang Sembuh" onChange = {e => setSembuh (e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Input Jumlah Kematian Pasien  </Form.Label>
                        <Form.Control type="text" placeholder="Masukan Jumlah kematian" onChange = {e => setMati (e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Input Jumlah yang dirawat  </Form.Label>
                        <Form.Control type="text" placeholder="Masukan Jumlah yang dirawat" onChange = {e => setRawat (e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-1"> 
                        <Form.Label>Input Tanggal</Form.Label>
                        <DatePicker
                        selected={Tanggal} 
                        onChange={(tanggal) => setTanggal(tanggal) } 
                        dateFormat="dd-MM-yyyy" />
                    </Form.Group>

                    <Button variant = "primary" size="sg" style={{width : "15vw"}} onClick={submit}> 
                        Submit Data 
                    </Button>
            </Form>
        </div>
    );
}

export default FormSeptember ;