const StatsDescription = ({ imp, desc }) => {
  return (
    <p className='text-sm text-slate-500 flex-[2] '>
      <span className='text-slate-800'>{imp}</span>
      {desc}
    </p>
  );
};

export default StatsDescription;
