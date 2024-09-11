import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {

    let data= [
        {
          label: "IoT",
          value: 45,
          color: "rgb(65, 139, 202, 1)",
          cutout: "65%",
        },
        {
          label: "Hardware",
          value: 33,
          color: "rgb(255, 229, 153, 1)",
          cutout: "60%",
        },
        {
          label: "Software",
          value: 17,
          color: "rgb(0, 0, 0, 1)",
          cutout: "70%",
        },
      ]
      
      const options = {
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
              font: {
                size: 22,
              },
              padding: 20,
              boxWidth: 40,
              boxHeight: 15,
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: data.map((item) => item.cutout),
      };
      
      
      
        const finalData = {
          labels: data.map((item) => item.label),
          datasets: [
            {
              data: data.map((item) => Math.round(item.value)),
              backgroundColor: data.map((item) => item.color),
              borderColor: data.map((item) => item.color),
              borderWidth: 1,
              dataVisibility: new Array(data.length).fill(true),
            },
          ],
        };

    return (
        <div style={{ width: '80%', height: '80%', margin: "5%"}}>
            <Doughnut data={finalData} options={options}/>
        </div>
    )
}

export default DonutChart