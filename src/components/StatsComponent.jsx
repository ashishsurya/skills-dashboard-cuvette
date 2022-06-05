import { useEffect } from 'react';
import CustomIconWrapper from './CustomIconWrapper';

const StatsComponent = ({ iconSrc, data, label }) => {
  useEffect(() => {
    return () => {
      console.log('RERENDERED');
    };
  });

  return (
    <div className='flex items-center p-4'>
      <CustomIconWrapper iconSrc={iconSrc} />
      <div className='flex flex-col pl-4'>
        <h2 className='font-bold text-lg'>{data}</h2>
        <p className='text-sm text-slate-500'>{label}</p>
      </div>
    </div>
  );
};

export default StatsComponent;
