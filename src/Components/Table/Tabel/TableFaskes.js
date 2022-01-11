import React,{useEffect,useState} from 'react';
import {
  Table,TableBody,TableCell,
  TableContainer,TableHead,TableRow,
  Paper,Box,Typography,
  TablePagination, TableFooter,Grid,Button
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import swal from 'sweetalert';
import Moment from 'moment';
import { useHistory } from 'react-router-dom';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) =>({
  root:{
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    flexGrow: 1
  },

  tableContainer:{
    marginLeft: '9%',
    maxWidth: 1200
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
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const history = useHistory();

  const[data,setData] = useState([]);

  useEffect(() => {
    getDataFaskes()
  },[]);

  function getDataFaskes(){
    axios.get('http://127.0.0.1:8000/api/faskesTabel').then((response) => {
        setData(response.data);
        console.log(response.data)
    })
  }

  function hapusFaskes(id){
    console.log(id)
    swal({
      title: "Data Berhasil di hapus!",
      text: "Click the Button!",
      icon: "success",
      button: "back",
    })
    axios.delete('http://127.0.0.1:8000/api/faskesTabel/delete/'+id).then((response) => {
            getDataFaskes()
            
        })
    
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filter = 'Kenjeran';

  return (
    <Box sx={{marginTop:"5vw"}}>    
    
    
    <Typography
       variant = "h5"
       align = "center"
       color = "Green"
       sx={{marginBottom:'2%',marginTop:'2%'}}
    >
      Daftar Tempat Fasilitas Kesehatan di Kota Surabaya
      </Typography>

     
    
    
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Kecamatan</TableCell>
            <TableCell align="center" className={classes.tableCell}>Bagian Wilayah</TableCell>
            <TableCell align="center" className={classes.tableCell}>Jenis Faskes</TableCell>
            <TableCell align="center"className={classes.tableCell}>Alamat</TableCell>
            <TableCell align="center" className={classes.tableCell}>Status</TableCell>
            <TableCell align="center" className={classes.tableCell}>Lat Koordinat </TableCell>
            <TableCell align="center" className={classes.tableCell}>Long Koordinat</TableCell>
            <TableCell align="center" className={classes.tableCell}>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow  
              key={row.id_tableSep}>
              <TableCell align="left">{row.kecamatan}</TableCell>
              <TableCell align="center">{row.bagian_wilayah}</TableCell>
              <TableCell align="center">{row.jenis_faskes}</TableCell>
              <TableCell align="center">{row.alamat}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.latKoordinat}</TableCell>
              <TableCell align="center">{row.longKoordinat}</TableCell>
              
              <TableCell>
              <Grid container>
                  
                <Grid container item>
                    <Button startIcon={<CreditCardIcon />} variant="contained" fullWidth color="inherit" href={"/EditFaskes/"+ row.id_faskes}>
                      Edit
                    </Button>
                </Grid>
                  
                  <Grid container item>
                    <Button startIcon={<DeleteIcon />} variant="contained"  fullWidth color="error" onClick={() => hapusFaskes(row.id_faskes)}>
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
                  onRowsPerPageChange={handleChangeRowsPerPage}>
            </TablePagination>
        </TableFooter>
       
      </Table>
     
    </TableContainer>
    </Box>
  );
}
