import { useStats } from '../context/StatsContext';
import CustomIconWrapper from './CustomIconWrapper';
import StatsDescription from './StatsDescription';

const GraphSectionHeader = () => {
  const [{ percentile }, _] = useStats();

  return (
    <div className='flex items-center justify-between pt-3'>
      <StatsDescription
        imp={`You scored ${percentile}% percentile`}
        desc={` which is ${percentile < 72 ? 'lower' : 'higher'} than the average percentile 72%
        of all the engineers who took this assessment`}
      />
      <CustomIconWrapper iconSrc='📈' />
    </div>
  );
};

export default GraphSectionHeader;
