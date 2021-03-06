import { useStats } from '../context/StatsContext';
import CourseMetadata from './CourseMetadata';

const HTMLHeader = () => {
  const [_, dispatch] = useStats();

  return (
    <div className='col-span-7 grid-item-wrapper flex items-center gap-2'>
      <img src='/html.png' alt='' className='h-12 object-contain' />
      <CourseMetadata
        num_questions={9}
        title='Hypertext Markup Language'
        duration={15}
        submittedOn='5 June 2021'
      />
      <button
        onClick={() => dispatch({ type: 'OPEN_MODAL' })}
        className='btn btn-primary'
      >
        Update
      </button>
    </div>
  );
};

export default HTMLHeader;
