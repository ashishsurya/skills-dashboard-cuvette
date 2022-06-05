import { useState } from 'react';
import getColor from '../utils/getColor';

const ProgressBar = ({ percentage }) => {
  const color = getColor(percentage);
  const barwidth = (192 * percentage) / 100;

  return (
    <div
      className={`relative w-52 h-3 rounded-lg`}
      style={{ backgroundColor: '#dddcdc' }}
    >
      <div
        className={`absolute h-full w-[${barwidth}px] rounded-lg z-10 animate-progress`}
        style={{ width: barwidth, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
