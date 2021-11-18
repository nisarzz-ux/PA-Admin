import * as React from 'react';
import {
  Table,TableBody,TableCell,
  TableContainer,TableHead,TableRow,
  Paper,AppBar,Box,Toolbar,Typography,
  Button,IconButton,TablePagination, TableFooter 
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';




function createData(Kecamatan, Positif, Sembuh, Meninggal, JumlahPenduduk) {
  return { Kecamatan, Positif, Sembuh, Meninggal, JumlahPenduduk };
}

const rows = [
  createData('Sukomanunggal', 570, 520, 44, 103928),
  createData('Tandes', 491, 460, 30, 4),
  createData('Asemrowo', 209, 198, 11, 4.0),
  createData('Benowo', 437, 408, 27, 4.0),
  createData('Pakal', 365, 343, 20, 4.0),
  createData('Lakasantri', 337, 314, 20, 4.0),
  createData('Sambikerep', 455 ,423, 29, 4.0),
  createData('Genteng ', 355, 555, 61, 4.0),
  createData('Bubutan', 566, 520, 44, 4.0),
  createData('Simokerto', 398, 353, 45, 4.0),  
  createData('Pabean Cantikan', 351, 323, 25, 4.0),
  createData('Semampir',548, 501, 47, 4.0),
  createData('Krembangan', 774, 711, 59, 4.0),
  createData('Bulak', 270, 254, 13, 4.0),
  createData('Kenjeran', 724, 671, 51, 4.0),
  createData('Tambaksari', 1376, 1274, 90, 4.0),
  createData('Gubeng', 1041, 962, 74, 4.0),
  createData('Rungkut', 1018, 961, 45, 4.0),
  createData('Tenggilis', 391, 354, 33, 4.0),
  createData('Gunung Anyar ', 411, 378, 30, 4.0),
  createData('Sukolilo', 686, 651, 33, 4.0),
  createData('Mulyorejo', 656, 613, 39, 4.0),
  createData('Sawahan', 1187, 1104, 76, 4.0),
  createData('Wonokromo', 1111, 1002, 92, 4.0),
  createData('Karang Pilang', 496, 460, 39, 4.0),
  createData('Dukuh Pakis', 425, 391, 27, 4.0),
  createData('Wiyung', 600, 562, 28, 4.0),
  createData('Gayungan', 348, 325, 18, 4.0),
  createData('Wonocolo', 550, 504, 42, 4.0),
  createData('Jambangan', 419, 379, 30, 4.0),

];

const useStyles = makeStyles((theme) =>({
  root:{
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    flexGrow: 1
  },

  tableContainer:{
    marginLeft: '15%',
    maxWidth: 900
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
  const history = useHistory();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
            Tabel Data Covid Surabaya Tahun 2021
            </Typography>
            
            <Button onClick={() => history.push('/')} variant="contained" color="warning" size='small' 
            sx ={{marginRight:1}}>
                Previous
              </Button>
            
            <Button onClick={() => history.push('/TableNovember')} variant="contained" color="secondary" size='small' 
            sx ={{marginRight:1}}>
                Next
              </Button>
            
            <Button onClick={ () => history.push('/Timeline')} 
            variant="contained" 
            color="info" 
            size='small'
            sx ={{marginRight:1}}
            >
                Lihat TimeLine
              </Button>

              <Button onClick={() => history.push('/GrafikCoba')} variant="contained" color="success" size='small'>
                Lihat Diagram
              </Button>

          </Toolbar>
        </AppBar>
      
    
   
    <Typography
       variant = "h5"
       align = "center"
       color = "Green"
       sx={{marginBottom:'2%',marginTop:'2%'}}
    >
      Rekapan Pesebaran Covid-19 Bulan Oktober
      </Typography>
    
    
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Kecamatan</TableCell>
            <TableCell align="center" className={classes.tableCell}>Positif</TableCell>
            <TableCell align="center"className={classes.tableCell}>Sembuh</TableCell>
            <TableCell align="center" className={classes.tableCell}>Meninggal</TableCell>
            <TableCell align="center" className={classes.tableCell}>Jumlah Penduduk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow  
              key={row.Kecamatan}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Kecamatan}
              </TableCell>
              <TableCell align="center">{row.Positif}</TableCell>
              <TableCell align="center">{row.Sembuh}</TableCell>
              <TableCell align="center">{row.Meninggal}</TableCell>
              <TableCell align="center">{row.JumlahPenduduk}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
              <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
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
