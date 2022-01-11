import React,{useEffect,useState} from 'react';
import {
  Table,TableBody,TableCell,
  TableContainer,TableHead,TableRow,
  Paper,AppBar,Box,Toolbar,Typography,
  Button,IconButton,TablePagination, TableFooter,Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import CreateIcon from '@mui/icons-material/Create';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeleteSweep from '@mui/icons-material/DeleteSweep';



const useStyles = makeStyles((theme) =>({
  root:{
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    flexGrow: 1
  },

  tableContainer:{
    marginLeft: '5%',
    maxWidth: "90vw"
  },

  tableCell:{
    fontWeight: 'bold',
    backgroundColor: 'orange',
    fontFamily:'Tahoma',
    textColor:'white'
  },

  tulisan:{
    marginBottom:'20%'
  },

  tulisanButton:{
    backgroundColor: 'green',
    maxWidth:100
  }

}));


export default function BasicTable() {

const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    },[]);

  function getData(){
    axios.get('http://127.0.0.1:8000/api/demografi').then((response) => {
        setData(response.data);
        console.log(response.data)
    })
  }

  function hapus(id){
    console.log(id)
    swal({
      title: "Data Berhasil di hapus!",
      text: "Click the Button!",
      icon: "success",
      button: "back",
    })
    axios.delete('http://127.0.0.1:8000/api/demografi/delete/'+id).then((response) => {
            getData()
            
        })
    
  }
    
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const filter = 1000;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box>    
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
              Demografi Kota Surabaya Tahun 2021
            </Typography>
            
            
            <Button onClick={ () => history.push('/')} 
                startIcon = {<LocationSearchingIcon />}
                variant="contained" 
                color="error" 
                size='small'
                sx ={{marginRight:1}}
                >
                    Lihat Peta
            </Button>

            
            <Button 
                  startIcon={<CreateIcon />}
                  href='/FormDemografi' 
                  variant="contained" 
                  color="success" 
                  size='small' 
                  style={{marginLeft:5}}>
                        Input Form
            </Button>

          </Toolbar>
        </AppBar>
      
    
   
    <Typography
       variant = "h5"
       align = "center"
       color = "Green"
       sx={{marginBottom:'2%',marginTop:'2%'}}
    >
      Rekapan Pesebaran Demografi Penduduk
      </Typography>
    
    
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.tableCell}>Kecamatan</TableCell>
            <TableCell align="left" className={classes.tableCell}>Bagian Wilayah</TableCell>
            <TableCell align="left" className={classes.tableCell}>Penduduk Laki-Laki </TableCell>
            <TableCell align="left" className={classes.tableCell}>Penduduk Wanita</TableCell>
            <TableCell align="left" className={classes.tableCell}>Lat Koordinat </TableCell>
            <TableCell align="left" className={classes.tableCell}>Long Koordinat </TableCell>
            <TableCell align="left" className={classes.tableCell}>
              Tindakan
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key = {row.id_wilayah} >
              <TableCell align="left">{row.kecamatan}</TableCell>
              <TableCell align="left">{row.bagian_wilayah}</TableCell>
              <TableCell align="left">{row.penduduk_laki}</TableCell>
              <TableCell align="left">{row.penduduk_wanita}</TableCell>
              <TableCell align="left">{row.latKoordinat}</TableCell>
              <TableCell align="left">{row.longKoordinat}</TableCell>
              <TableCell align="left">
                <Grid container>
                  <Grid container item>
                    <Button startIcon={<CreditCardIcon />} variant="contained" color="inherit" href={"/EditDemografi/"+ row.id_wilayah}>
                      Edit
                    </Button>
                  </Grid>
              
                  <Grid container item>
                    <Button startIcon={<DeleteSweep />} variant="contained" color="error" onClick={() => hapus(row.id_wilayah)}>
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              
              </TableCell>
            </TableRow>
           ))} 
        </TableBody>
        <TableFooter>
              <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableFooter>
      </Table>
    </TableContainer>
    </Box>
  );
}
