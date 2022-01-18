import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import DesemberTabel from '../Table/Tabel/TableDesember.js';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CreateIcon from '@mui/icons-material/Create';
import TableViewIcon from '@mui/icons-material/TableView';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DesemberTabel />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{marginRight:"20vw"}}>
           Rekapan Data bulanan Kasus Covid 19 Kota Surabaya
          </Typography>

          <Button href='TableNovember' variant="contained" color="warning" size='small' 
            sx ={{marginRight:1}}>
                Previous
              </Button>
            
            <Button href='TableJanuari' variant="contained" color="secondary" size='small' 
            sx ={{marginRight:1}}>
                Next
              </Button>
            
            <Button href='/Timeline'
            variant="contained" 
            color="info" 
            size='small'
            sx ={{marginRight:1}}
            >
                TimeLine
              </Button>

              <Button href='/GrafikCoba' variant="contained" color="success" size='small'>
                Diagram
              </Button>

              <Button href='/FormDesember ' variant="contained" color="error" size='small' style={{marginLeft:10}}>
                  Input Form
              </Button>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <ListItem >
              <AddLocationIcon />
              <Button variant="text" href="/">
                Peta Kota Surabaya
              </Button>
            </ListItem>
        </DrawerHeader>
      
          <List>
                {['Utara','Selatan','Barat','Timur','Pusat','PetaFaskes'].map((tempat) =>
                  <ListItem>
                  <AddLocationIcon color="warning"></AddLocationIcon>
                  <Button variant="text" href={"/"+tempat}>
                      Surabaya {tempat}
                  </Button>
                  </ListItem>
                )}
          </List>
        <Divider />

        <List>
          <Button size="medium" variant="text" color="success" sx={{marginLeft:"3vw"}} href='/Form'>Form</Button>
          {['TableSeptember','TableOktober','TableNovember','TableJanuari','TableFaskes'].map((table) =>
                  <ListItem>
                  {/* <CreateIcon></CreateIcon> */}
                  <Button variant="text" href={"/"+table} startIcon={<TableViewIcon />}>
                     {table}
                  </Button>
                  </ListItem>
                )}
        </List>

      </Drawer>
      
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
