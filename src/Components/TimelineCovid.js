import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
      tulisan:{
        marginBottom:'30%',
      },

      tulisanTimeline:{
        color:'white'
      }
}));

export default function ColorsTimeline() {
  const panggilClass = useStyles();
  const history = useHistory();

  return (
    <Box>
    <Timeline position="alternate" 
    >
         <AppBar
                sx={{height:50,
                marginBottom:50}}>
                        <Typography 
                            className={panggilClass.tulisan}
                            variant="h4" 
                            component="div" 
                            sx={{ flexGrow: 1, fontFamily:'Monospace',align:'center', margin:'1% 1% 3% 2%',
                            fontSize:20}}>
                                Timeline Kaleidoskop Kasus Postif Covid Kota Surabaya di Tahun 2021
                              <Button onClick={() => history.push('/')} 
                              variant="contained" 
                              color="secondary" 
                              size='small'
                              sx={{marginLeft:60}}>
                                Kembali
                              </Button>
                        </Typography>
                        
        </AppBar>

      <TimelineItem sx={{marginTop:10}}>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>November( 5 Kasus Postif Covid-19)</TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Oktober( 96 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>September( 658 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Agustus( 7908 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>
    

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Juli( 652 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>
    
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Juni( 131 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>
    
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Mei( 114 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>
    
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>April( 170 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>
    
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Maret( 225 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>
    
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Febuari( 226 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning" />
        </TimelineSeparator>
        <TimelineContent>Januari( 114 Kasus Positif Covid-19)</TimelineContent>
      </TimelineItem>
    
    </Timeline>
    </Box>

  );
}