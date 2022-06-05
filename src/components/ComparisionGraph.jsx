import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import GraphSectionHeader from './GraphSectionHeader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ComparisionGraph = () => {
  const options = {
    responsive: true,
    plugins: {},
  };

  const labels = ['0%', '20%', '40%', '60%', '80%', '100%'];

  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => Math.random() * (1000 - -1000) + -1000),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className='grid-item-wrapper col-span-7 row-span-5'>
      <h3>Comparision Graph</h3>
      <GraphSectionHeader />
      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisionGraph;
