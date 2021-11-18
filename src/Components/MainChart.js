import React, { Component } from 'react';
import Barchart from './BarChart.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';




class Mainchart extends Component {
    constructor(){
        super();
        this.state = {
            chartData:{}
        }
    }

    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        this.setState({
            chartData:{
                labels:['Surabaya Utara', 'Surabaya Timur', 'Surabaya Barat', 'Surabaya Selatan', 'Surabaya Pusat', ],
                datasets:[
                    {
                        label:'Jumlah Kematian Covid-19',
                        data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            
                        ],

                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ],
                        
                    },

                    {
                        label:'Jumlah Pasien Sembuh Covid-19',
                        data:[
                            500000,
                            400000,
                            300000,
                            200000,
                            100000,
                            
                        ],

                        backgroundColor:[
                            'rgba(200, 30, 100, 0.6)',
                            'rgba(50, 100, 200,0.5)',
                            'rgba(100, 206, 86, 0.4)',
                            'rgba(60, 92, 192, 0.3)',
                            'rgba(120, 10, 100, 0.2)',
                            'rgba(90, 100, 70, 0.1)',
                            'rgba(80, 60, 100, 0)'
                        ],
                        
                    }
                ]
            }
        })
    }

    render(){
        return(
            <Box
            sx={{
            width:1000,
            marginLeft:'15%',
            marginTop:'5%'}}>
            
            <Typography
            sx={{
                fontSize:'30px',
                marginBottom:'3%',
                marginLeft:'20px',
                fontStyle:'normal',
                fontFamily:'Arial',
                
            }}>
                Diagram Perbandingan Kasus Covid-19 di Surabaya berdasarkan Wilayah
            </Typography>

            <Barchart  
                chartData = {this.state.chartData}  
                legendPositon = "left"
            />

                  
            </Box>
            
            
        )
    }
}

export default Mainchart;