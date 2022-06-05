import { useStats } from '../context/StatsContext';
import CustomIconWrapper from './CustomIconWrapper';

const GraphSectionHeader = () => {
  const [{ percentile }, _] = useStats();

  return (
    <div className='flex items-center justify-between pt-3'>
      <p className='text-sm text-slate-500 flex-[2] '>
        <span className='text-slate-800'>You scored {percentile}% percentile</span> which is{' '}
        {percentile < 72 ? 'lower' : 'higher'} than the average percentile 72%
        of all the engineers who took this assessment
      </p>
      <CustomIconWrapper iconSrc='📈' />
    </div>
  );
};

export default GraphSectionHeader;
