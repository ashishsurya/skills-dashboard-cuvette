import { Fragment } from 'react';

const SideBarLink = ({ icon, title, selected }) => {
  return (
    <div
      className={`${
        selected
          ? 'bg-[#F7F8FA] text-[#445FE2] rounded-tr-3xl rounded-br-3xl'
          : ''
      } flex items-center p-3 px-5 gap-2 cursor-pointer`}
    >
      <span>{icon}</span>
      <p>{title}</p>
    </div>
  );
};

export default SideBarLink;
