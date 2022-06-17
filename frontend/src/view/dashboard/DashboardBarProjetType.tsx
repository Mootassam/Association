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
    text: 'Dashboard Bar Projet Type',
  },
};
const data = {
  labels: [
    i18n('dashboard.charts.red'),
    i18n('dashboard.charts.blue'),
    i18n('dashboard.charts.yellow'),
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    },
  ],
};

export default function DashboardBarProjetType(props) {
  useEffect(() => {
    DashboardService.ProjetStatus().then((res) => {
      res.forEach((element) => {
        label.push(element._id);
        counts.push(element.count);
      });
    });
  }, []);

  return <Doughnut options={options} data={data} />;
}
