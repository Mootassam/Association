import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';
let label: string[] = [];
let counts: number[] = [];
let datasets = [
  {
    label: 'Dataset 1',
    data: [1],
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  },
  {
    label: 'Dataset 2',
    data: [3],
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
    text: 'Dashboard Bar Projet Type',
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
  useEffect(() => {
    DashboardService.ProjetType().then((res) => {
      res.forEach((element) => {
        element.projet.forEach((element) => {
          label.push(element.nom);
        });
        counts.push(element.count);
      });
    });
  }, []);

  useEffect(() => {}, []);
  return (
    <Bar
      data={data}
      options={options}
      width={100}
      height={50}
    />
  );
}
