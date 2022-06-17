import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';
let label: string[] = [];
let counts: number[] = [];
let datasets = [
  {
    type: 'bar' as const,
    label: label,
    data: counts,
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  },
];

const data = {
  labels: label,
  datasets,
};

const options = {
  responsive: true,
  legend: {
    display: true,
    position: 'top' as const,
  },
  title: {
    display: true,
    text: 'Dashboard Bar Projet Status',
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
        },
        display: true,
      },
    ],
  },
};

export default function DashboardBarProjetStatut(props) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    DashboardService.ProjetType().then(async (res) => {
      setChartData({
        labels: res.map((crypto) =>
          crypto.projet.map((item) => item.nom),
        ),

        datasets: [
          {
            label: 'Status',
            data: res.map((crypto) => crypto.count),
            backgroundColor: [
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
