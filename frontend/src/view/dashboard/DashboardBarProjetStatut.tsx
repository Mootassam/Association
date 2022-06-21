/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';
let label: string[] = [''];
let counts: number[] = [];
const options = {
  responsive: true,
  legend: {
    display: true,
    position: 'top' as const,
  },
  title: {
    display: true,
    text: i18n('dashboard.charts.projectS'),
  },
};

export default function DashboardBarProjetStatut(props) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    DashboardService.ProjetStatus().then((res) => {
      setChartData({
        labels: ['1', '3', '5'],
        datasets: [
          {
            // label: 'type',
            data: [3, 4, 5],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
            ],
          },
        ],
      });
    });
  }, []);

  return <Doughnut options={options} data={chartData} />;
}
