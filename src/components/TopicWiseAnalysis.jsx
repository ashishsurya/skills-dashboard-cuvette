import { Fragment } from 'react';
import getColor from '../utils/getColor';
import ProgressBar from './ProgressBar';

const TopicWiseAnalysis = ({ topic_name, percentage }) => {

  return (
    <Fragment>
      <h4 className='font-extralight text-sm'>{topic_name}</h4>
      <div className='flex items-center justify-between'>
        <ProgressBar percentage={percentage} />
        <span style={{ color: getColor(percentage) }}>{percentage}&#37;</span>
      </div>
    </Fragment>
  );
};

export default TopicWiseAnalysis;
