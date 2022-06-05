import { useStats } from '../context/StatsContext';
import StatsComponent from './StatsComponent';

const StatsWrapper = () => {
  const [{ rank, correctAnswers, percentile }, dispatch] = useStats();

  return (
    <div className='col-span-7 row-span-2 grid-item-wrapper'>
      <h2>Quick Statistics</h2>
      <div className='grid grid-cols-3 divide-x mt-4'>
        <StatsComponent
          iconSrc='🏆'
          data={parseInt(rank).toLocaleString('en-IN')}
          label='RANK'
        />
        <StatsComponent
          iconSrc='🗓'
          data={`${percentile}%`}
          label='PERCENTILE'
        />
        <StatsComponent
          iconSrc='✅'
          data={`${
            correctAnswers < 10 ? `0${correctAnswers}` : correctAnswers
          } / 15`}
          label='CORRECT ANSWERS'
        />
      </div>
    </div>
  );
};

export default StatsWrapper;
