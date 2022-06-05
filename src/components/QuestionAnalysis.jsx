import { useStats } from '../context/StatsContext';
import QuestionAnalysisGraph from './QuestionAnalysisGraph';
import StatsDescription from './StatsDescription';

const QuestionAnalysis = () => {
  const [{ correctAnswers }] = useStats();

  return (
    <div className='grid-item-wrapper row-span-4 col-span-5'>
      <header className='flex items-center justify-between'>
        <h3>Question Analysis</h3>
        <h3 className='text-[#438AF6]'>{`${
          correctAnswers < 10 ? `0${correctAnswers}` : correctAnswers
        } / 15`}</h3>
      </header>
      <StatsDescription
        imp={`You scored ${correctAnswers} questions correct out of 15.`}
        desc='However i still needs some improvements'
      />
      <div className='grid place-items-center pt-4'>
        <QuestionAnalysisGraph />
      </div>
    </div>
  );
};

export default QuestionAnalysis;
