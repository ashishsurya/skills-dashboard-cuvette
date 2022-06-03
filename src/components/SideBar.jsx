import { Equalizer, WorkspacePremium, NoteOutlined } from '@mui/icons-material';
import SideBarLink from './SideBarLink';

const SideBar = () => {
  return (
    <div className='flex-[2] flex flex-col gap-4 pt-10 border-r'>
      <SideBarLink icon={<Equalizer />} title='Dashboard' />
      <SideBarLink icon={<WorkspacePremium />} title='Skill Test' selected />
      <SideBarLink icon={<NoteOutlined />} title='Internships' />
    </div>
  );
};

export default SideBar;
