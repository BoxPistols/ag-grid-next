// src/components/chart/PieChart.tsx
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js'

import styles from '@/styles/Home.module.css'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale)

const PieChart = () => {
  const data = {
    labels: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月'],
    datasets: [
      {
        label: 'Dataset',
        data: [25, 59, 80, 60, 96, 55, 40, 90],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(201, 203, 207, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
      },
    ],
  }

  return (
    <div>
      <Pie data={data} />
    </div>
  )
}

export default PieChart
