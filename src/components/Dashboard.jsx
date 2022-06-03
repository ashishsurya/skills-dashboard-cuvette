import HTMLHeader from './HTMLHeader';
import SyllabusAnalysis from './SyllabusAnalysis';

const Dashboard = () => {
  return (
    <div className='flex-[10] p-8 w-full '>
      <h1>Skill Test</h1>
      {/* main dashboard */}
      <div className='grid grid-cols-12 grid-rows-7 gap-4 pt-8'>
        <HTMLHeader />
        <SyllabusAnalysis />
      </div>
    </div>
  );
};

export default Dashboard;
