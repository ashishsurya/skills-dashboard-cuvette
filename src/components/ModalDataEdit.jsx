const ModalDataEdit = ({ num, label, value, onChange }) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='bg-[#142683] text-white rounded-full  w-6 h-6 grid place-items-center'>
        {num}
      </div>
      <p className='text-[18px] flex-1 text-slate-500'>
        Update your <span className="text-slate-700 font-bold">{label}</span>
      </p>
      <input type='number' value={value} onChange={e => onChange(e.target.value)} className='border rounded-md p-4' />
    </div>
  );
};

export default ModalDataEdit;
