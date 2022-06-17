import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';
export default function DashboardNewsCount(props) {
  const [Count, SetCount] = useState(0);
  useEffect(() => {
    DashboardService.Newscount().then((res) => {
      SetCount(res[0].count);
    });
  }, []);
  return <h3> News Count {Count}</h3>;
}
