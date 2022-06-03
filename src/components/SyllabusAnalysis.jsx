import TopicWiseAnalysis from "./TopicWiseAnalysis";

const SyllabusAnalysis = () => {
  return (
    <div className='col-span-5 border rounded-md row-span-3 p-4'>
      <h3 className='text-base font-bold'>Syllabus Wise Analysis</h3>
      <div className="pt-4 flex flex-col gap-3">
        <TopicWiseAnalysis percentage={80} topic_name="HTML Tools, Forms, History" />
        <TopicWiseAnalysis percentage={60} topic_name="Tags & References in HTML"/>
        <TopicWiseAnalysis percentage={24} topic_name="Tables and CSS Basics"/>
        <TopicWiseAnalysis percentage={96} topic_name="Tables and CSS Basics"/>
        
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
