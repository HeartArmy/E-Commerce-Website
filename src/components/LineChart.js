import React from 'react';
import {Line} from "react-chartjs-2";

function LineChart() {
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May', "June", "July", "August"],
        datasets: [
          {
            label: 'Sales',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,255, 255, 255)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1000, 5000, 6000, 3000, 10000, 7000, 6000, 9000]
            // 'rgba(75,192,192,0.4)'
          }
        ]
    }
    return (
        <div>
           <Line
           data={state}
           width={"800%"}
           height={"400%"}
            options={{
                title:{
                display:true,
                text:'Total Sales per month',
                fontSize:20,
                maintainAspectRatio: true,
                scales:{
                    yAxes:[{
                        ticks:{
                            suggestedMax:10000,
                            suggestedMin:0,
                            stepSize: 1000
                        }
                    }]

                }
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

export default LineChart
