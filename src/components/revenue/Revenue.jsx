import React, {useState, useEffect} from 'react';
import {  Doughnut } from 'react-chartjs-2';
import dat from '../../data/data'
import './revenue.css'

function PieChart() {

    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            labels: ['Received','Pending', 'Cancelled'],
            datasets: [
              {
                label: 'Average amount',
                backgroundColor: [
                    '#2FDE00',
                    '#FFA500',
                    '#B21F00',
                ],
                hoverBackgroundColor: [
                '#d4eee2',
                '#FFFFB2',
                '#7A1712',
                ],
                data: [dat.total.sumReceived, dat.total.sumPending, dat.total.sumCancelled]
              }
            ]
          });
    }, [])

    return (
        <div className = 'pie'>
            <Doughnut
          data={data}
          options={{
            title:{
              display:true,
              text:'Total Revenue of the Company',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    )
}

export default PieChart;