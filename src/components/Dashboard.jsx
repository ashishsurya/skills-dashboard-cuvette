import ComparisionGraph from './ComparisionGraph';
import HTMLHeader from './HTMLHeader';
import QuestionAnalysis from './QuestionAnalysis';
import StatsWrapper from './StatsWrapper';
import SyllabusAnalysis from './SyllabusAnalysis';

const Dashboard = () => {
  return (
    <div className='flex-[10] p-8 w-full '>
      <h1>Skill Test</h1>
      {/* main dashboard */}
      <div className='flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-8 gap-4 pt-8'>
        <HTMLHeader />
        <SyllabusAnalysis />
        <StatsWrapper />
        <ComparisionGraph />
        <QuestionAnalysis />
      </div>
    </div>
  );
};

export default Dashboard;
