import CourseMetadata from './CourseMetadata';

const HTMLHeader = () => {
  return (
    <div className='col-span-7 border rounded-md p-4 flex items-center gap-2'>
      <img src='/html.png' alt='' className='h-12 object-contain' />
        <CourseMetadata
          num_questions={9}
          title='Hypertext Markup Language'
          duration={15}
          submittedOn='5 June 2021'
        />
      <button className='py-2 px-9 bg-[#142683] rounded-md text-white'>Update</button>
    </div>
  );
};

export default HTMLHeader;
