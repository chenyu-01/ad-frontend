
import { config } from "@/config";
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ currentValue, labels, id}) => {
  const chartRef = useRef(null);

  const [dataPoints, setDataPoints] = useState([]);
  const serverUrl = config.serverUrl;
  
  
  useEffect(() => {
    if (id && serverUrl) {
      console.log(`Fetching data for ID: ${id} from URL: ${serverUrl}/api/property/predict/${id}`);
      
      fetch(`${serverUrl}/api/property/predict/${id}`)
        .then(response => response.json())
        .then(responseData => {
          console.log('Data received:', responseData);
          setDataPoints(responseData.data || responseData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      console.log('ID or Server URL is not defined yet.');
    }
  }, [id, serverUrl]);
  
  useEffect(() => {
    if (dataPoints.length > 0) {
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Price in SGD',
          data: [currentValue, ...dataPoints], 
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    return () => {
      chartInstance.destroy();
      };
    }
  }, [dataPoints, currentValue, labels]); 

  return <canvas ref={chartRef} className="w-full h-full"></canvas>;
};

export default LineChart;