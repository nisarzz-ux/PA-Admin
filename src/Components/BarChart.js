import { sizeWidth } from '@mui/system';
import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'left',
        location:'Surabaya'
    }
    
    
    render(){
        return(
            <Bar  
                title='Tabel Kematian'
                data={this.state.chartData}
                options ={{
                    title:{
                        display:this.props.displayTitle,
                        text:'Largest Cities in'+this.props.location,
                        fontSize : 25
                    },
                    
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition,
                    }
                    
                }}
            />  
        )
    }
}

export default BarChart;

