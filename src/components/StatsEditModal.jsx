import { Fragment, useState } from 'react';
import { useStats } from '../context/StatsContext';
import ModalDataEdit from './ModalDataEdit';

const StatsEditModal = () => {
  const [{ rank, percentile, correctAnswers }, dispatch] = useStats();

  const [localRank, setLocalRank] = useState(rank);
  const [localPer, setLocalPer] = useState(percentile);
  const [localcrctAns, setLocalcrctAns] = useState(correctAnswers);

  function updateStats() {
    const newStats = {
      rank: parseInt(localRank),
      percentile: parseInt(localPer),
      correctAnswers: parseInt(localcrctAns),
      open: false,
    };

    dispatch({
      type: 'SET_DATA',
      payload: newStats,
    });
  }

  return (
    <Fragment>
      <header className='flex justify-between items-center border-b pb-4'>
        <h1>Update Scores</h1>
        <img src='/html.png' alt='' className='h-12 object-contain' />
      </header>
      <div className='flex flex-col gap-4 py-6 border-b'>
        <ModalDataEdit
          label='rank'
          num={1}
          value={localRank}
          onChange={setLocalRank}
        />
        <ModalDataEdit
          label='percentile'
          num={2}
          value={localPer}
          onChange={setLocalPer}
        />
        <ModalDataEdit
          label='current score (out of 15)'
          num={1}
          value={localcrctAns}
          onChange={setLocalcrctAns}
        />
      </div>
      <div className='flex gap-4 justify-end p-5'>
        <button
          className='btn btn-secondary'
          onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
        >
          Cancel
        </button>
        <button onClick={updateStats} className='btn btn-primary'>
          Submit
        </button>
      </div>
    </Fragment>
  );
};

export default StatsEditModal;
