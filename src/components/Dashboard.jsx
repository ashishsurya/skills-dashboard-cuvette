import HTMLHeader from './HTMLHeader';
import StatsWrapper from './StatsWrapper';
import SyllabusAnalysis from './SyllabusAnalysis';

const Dashboard = () => {
  return (
    <div className='flex-[10] p-8 w-full '>
      <h1>Skill Test</h1>
      {/* main dashboard */}
      <div className='grid grid-cols-12 grid-rows-8 gap-4 pt-8'>
        <HTMLHeader />
        <SyllabusAnalysis />
        <StatsWrapper />
      </div>
    </div>
  );
};

export default Dashboard;
