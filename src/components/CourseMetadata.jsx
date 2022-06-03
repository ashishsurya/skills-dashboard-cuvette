import VerticalDivider from './VerticalDivider';

const CourseMetadata = ({ title, num_questions, duration, submittedOn }) => {
  return (
    <div className='flex-1'>
      <h4 className='text-base font-bold'>{title}</h4>
      <p className='text-sm font-extralight text-slate-600'>
        Questions :{' '}
        {`${num_questions < 10 ? `0${num_questions}` : num_questions}`}
        <VerticalDivider />
        Duration : {`${duration < 10 ? `0${duration}` : duration} mins`}
        <VerticalDivider />
        Submitted on {submittedOn}
      </p>
    </div>
  );
};

export default CourseMetadata;
