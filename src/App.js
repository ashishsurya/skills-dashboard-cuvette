import { Modal } from '@mui/material';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import SideBar from './components/SideBar';
import StatsEditModal from './components/StatsEditModal';
import { useStats } from './context/StatsContext';

function App() {
  const [{ open }, dispatch] = useStats();

  return (
    <>
      <div className='font-poppins'>
        <Header />
        <div className='flex custom-height'>
          <SideBar />
          <Dashboard />
        </div>
      </div>
      <Modal open={open} onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
        <div className='absolute !font-poppins  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-lg shadow-lg   md:w-3/5 md:h-3/5 bg-white'>
          <StatsEditModal />
        </div>
      </Modal>
    </>
  );
}

export default App;
