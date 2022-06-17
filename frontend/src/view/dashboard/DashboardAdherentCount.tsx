import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';
export default function DashboardAdherentCount(props) {
  const [Count, SetCount] = useState();
  useEffect(() => {
    DashboardService.ProjetCount().then((res) => {
      SetCount(res[0].count);
    });
  }, []);
  return <h3>Adherent Count {Count}</h3>;
}
