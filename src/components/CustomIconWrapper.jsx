const CustomIconWrapper = ({ iconSrc }) => {
  return (
    <div className='bg-slate-200 w-[50px] h-[50px] rounded-full grid place-items-center'>
      <span className='p-[14px]'>{iconSrc}</span>
    </div>
  );
};

export default CustomIconWrapper;
