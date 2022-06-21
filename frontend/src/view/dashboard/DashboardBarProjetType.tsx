import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';

const options = {
  responsive: true,
  legend: {
    display: false,
    position: 'top' as const,
  },
  title: {
    display: true,
    text: i18n('dashboard.charts.projectT'),
  },
  scales: {
    xAxes: [
      {
        display: true,
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            if (value % 1 === 0) {
              return value;
            }
          },
        },
        display: true,
      },
    ],
  },
};

export default function DashboardBarProjetType(props) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    DashboardService.ProjetType().then(async (res) => {
      setChartData({
        labels: res.map((crypto) =>
          crypto.projet.map((item) => item.nom),
        ),
        datasets: [
          {
            backgroundColor: [
              '#97a7b6',
              '#e6a9b3',
              '#dce1e6',
              '#5098cd',
              '#73c779',
              '#b5afd1',
              '#0093a6',
            ],
            hoverBackgroundColor: [
              '#97a7b6',
              '#e6a9b3',
              '#dce1e6',
              '#5098cd',
              '#73c779',
              '#b5afd1',
              '#0093a6',
            ],
            borderWidth: 1,
            hoverBorderWidth: 2,
            borderColor: [
              '#97a7b6',
              '#e6a9b3',
              '#dce1e6',
              '#5098cd',
              '#73c779',
              '#b5afd1',
              '#0093a6',
            ],
            borderAlign: 'inner',
            data: res.map((crypto) => crypto.count),
          },
        ],
      });
    });
  }, []);

  return (
    <Bar
      data={chartData}
      options={options}
      width={100}
      height={50}
    />
  );
}
