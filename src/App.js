import Dashboard from './components/Dashboard';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <div className='flex custom-height'>
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
