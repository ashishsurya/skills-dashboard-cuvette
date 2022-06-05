import { useStats } from '../context/StatsContext';

const QuestionAnalysisGraph = () => {
  const [{ correctAnswers }] = useStats();

  return (
    <div
      className='relative w-[160px] h-[160px] bg-[#438AF6] rounded-full'
      style={{
        background: `
          conic-gradient(
            #4d5bf9 ${Math.ceil((correctAnswers * 100 * 3.6) / 15)}deg,
            #cadcff ${Math.ceil((correctAnswers * 100 * 3.6) / 15)}deg
          )
        `,
      }}
    >
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 bg-white w-[130px] h-[130px] -translate-y-1/2 text-3xl rounded-full grid place-items-center'>
        🎯
      </div>
    </div>
  );
};

export default QuestionAnalysisGraph;
