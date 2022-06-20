import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';

const data = {
  labels: [
    `${i18n('dashboard.charts.day')} 1`,
    `${i18n('dashboard.charts.day')} 2`,
    `${i18n('dashboard.charts.day')} 3`,
    `${i18n('dashboard.charts.day')} 4`,
    `${i18n('dashboard.charts.day')} 5`,
  ],
  datasets: [
    {
      label: i18n('dashboard.charts.red'),
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 82],
    },
  ],
};

const options = {
  responsive: true,
  legend: {
    display: true,
    position: 'top' as const,
  },
  title: {
    display: true,
    text: i18n('dashboard.charts.objectif'),
  },
  scales: {
    xAxes: [
      {
        display: true,
      },
    ],
    yAxes: [
      {
        display: true,
      },
    ],
  },
};

export default function DashboardBarObjectifStatut(props) {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    DashboardService.objectifStatus().then(async (res) => {
      setChartData({
        labels: res.map((crypto) => crypto._id),

        datasets: [
          {
            label: i18n('dashboard.charts.objectif'),
            data: res.map((crypto) => crypto.count),
            backgroundColor: [
              '#50AF95',
              '#ffbb11',
              '#ecf0f1',
              '#50AF95',
              '#f3ba2f',
              '#2a71d0',
            ],
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
