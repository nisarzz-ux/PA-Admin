import React,{useEffect , useState }  from 'react';
import {Form , Button  } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


// import './Form.css';
function FormEdit(props){

    const[kecamatan,setKecamatan] = useState('');
    const[bagian_wilayah,setBagianWilayah] = useState('');
    const[penduduk_laki,setPendudukLaki] = useState('');
    const[penduduk_wanita,setPendudukWanita] = useState('');
    const[latKoordinat,setLatKoordinat] = useState();
    const[longKoordinat,setLongKoordinat] = useState();
    const[message,setMessage] = useState('false');
    const history = useHistory();



    const handleKecamatanChange = (e) => {
        setKecamatan(e.target.value)
    }

    const handleBagianWilayahChange = (e) => {
        setBagianWilayah(e.target.value)
    }

    const handleSetPendudukLakiChange = (e) => {
        setPendudukLaki(e.target.value)
    }

    const handleSetPendudukWanitaChange = (e) => {
        setPendudukWanita(e.target.value)
    }

    const handleSetLatKoordinatChange = (e) => {
        setLatKoordinat(e.target.value)
    }

    const handleSetLongKoordinatChange = (e) => {
        setLongKoordinat(e.target.value)
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/demografi_show/' + props.match.params.id)
        .then(response => {
            setKecamatan(response.data[0].kecamatan)
            setBagianWilayah(response.data[0].bagian_wilayah)
            setPendudukLaki(response.data[0].penduduk_laki)
            setPendudukWanita(response.data[0].penduduk_wanita)
            setLatKoordinat(response.data[0].latKoordinat)
            setLongKoordinat(response.data[0].longKoordinat)
        })
    },[]) 

    const submit = () => {
        const data = {
            kecamatan,
            bagian_wilayah,
            penduduk_laki,
            penduduk_wanita,
            latKoordinat,
            longKoordinat
        }
        axios.put('http://127.0.0.1:8000/api/demografi/update/' + props.match.params.id, data)
            .then((response) => {
                swal({
                    title: "Data Berhasil di ubah!",
                    text: "Click the Button!",
                    icon: "success",
                    button: "back",
                   })
                history.push('/TableDemografi')
            }).catch((error) => {
                setMessage("Update tidak dapat Dilakukan")
            });
    }
    
    return(
                <Form style={{
                    marginTop:"5vw",
                    marginLeft:"20vw",
                    marginRight:"20vw"
                }}>
                    <Form.Group className="mb-1">
                        <Form.Label> Masukan Kecamatan </Form.Label>
                        <Form.Control 
                        type="text"
                        id = "kecamatan" 
                        value = {kecamatan}
                        onChange = {handleKecamatanChange}
                        placeholder="Masukan Kecamatan" />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Masukan Bagian Wilayah </Form.Label>
                        <Form.Select 
                        type="text"
                        id = "bagian_wilayah"
                        value={bagian_wilayah}
                        onChange = {handleBagianWilayahChange}
                        >
                            <option>Pilih Bagian Wilayahnya</option>
                            <option value="Surabaya Utara" >Surabaya Utara</option>
                            <option value="Surabaya Selatan">Surabaya Selatan</option>
                            <option value="Surabaya Barat">Surabaya Barat</option>
                            <option value="Surabaya timur">Surabaya timur</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Input Jumlah Penduduk Laki-laki </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Masukan Jumlah Penduduk Laki-Laki"
                        id="penduduk_laki"
                        value={penduduk_laki}
                        onChange={handleSetPendudukLakiChange} />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Input Jumlah Penduduk Perempuan </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Masukan Jumlah Penduduk Perempuan"
                        id="penduduk_wanita"
                        value={penduduk_wanita}
                        onChange={handleSetPendudukWanitaChange} />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Lattiude Koordinat Wilayah </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Masukan lattiude Koordinat wilayah"
                        id="latKoordinat"
                        value={latKoordinat}
                        onChange={handleSetLatKoordinatChange} />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label> Longttiude Koordinat Wilayah </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Masukan longttiude Koordinat wilayah"
                        id="longKoordinat"
                        value={longKoordinat}
                        onChange={handleSetLongKoordinatChange} />
                    </Form.Group>

                    <Button variant = "primary" size="sg" style={{width : "15vw"}} onClick={submit}> 
                        Submit Data 
                    </Button>


            </Form>
        
    );
}

export default FormEdit ;