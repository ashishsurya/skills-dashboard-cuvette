const CustomIconWrapper = ({ iconSrc }) => {
  return (
    <div className='bg-slate-200 rounded-full'>
      <img className='p-[14px]' src={iconSrc} alt='' />
    </div>
  );
};

export default CustomIconWrapper;
