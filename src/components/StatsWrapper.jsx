import { useStats } from '../context/StatsContext';
import StatsComponent from './StatsComponent';

const StatsWrapper = () => {
  const [{ rank, correctAnswers, percentile }, dispatch] = useStats();

  return (
    <div className='col-span-7 row-span-2 grid-item-wrapper'>
      <h3 className='font-bold'>Quick Statistics</h3>
      <div className='grid grid-cols-3 divide-x mt-4'>
        <StatsComponent
          iconSrc='/cup.svg'
          data={rank.toLocaleString()}
          label='RANK'
        />
        <StatsComponent
          iconSrc='/pad.svg'
          data={`${percentile}%`}
          label='PERCENTILE'
        />
        <StatsComponent
          iconSrc='/done.svg'
          data={`${correctAnswers < 10 ? `0${correctAnswers}` : correctAnswers} / 15`}
          label='CORRECT ANSWERS'
        />
      </div>
    </div>
  );
};

export default StatsWrapper;
