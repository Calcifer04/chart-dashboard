import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const LineChart = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'IoT',
                data: [10, 15, 60, 48, 30, 13],
                fill: true,
                borderColor: 'rgb(65, 139, 202, 1)',
                backgroundColor: 'rgb(65, 139, 202, 1)',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointStyle: 'circle',
            },
            {
                label: 'Hardware',
                data: [40, 9, 20, 42, 50, 6],
                fill: true,
                borderColor: 'rgb(255, 229, 153, 1)',
                backgroundColor: 'rgb(255, 229, 153, 1)',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointStyle: 'circle',
            },
            {
                label: 'Software',
                data: [15, 3, 16, 19, 13, 20],
                fill: true,
                borderColor: 'rgb(0, 0, 0, 1)',
                backgroundColor: 'rgb(0, 0, 0, 1)',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointStyle: 'circle',
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    font: {
                        size: 22,
                    },
                    padding: 20,
                    boxWidth: 20,
                    boxHeight: 15,
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '320px', margin: "20px"}}>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChart;