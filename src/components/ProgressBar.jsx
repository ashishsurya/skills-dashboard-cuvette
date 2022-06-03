import getColor from '../utils/getColor';

const ProgressBar = ({ percentage }) => {
  const color = getColor(percentage);
  const barwidth = (192 * percentage) / 100;

  console.log({ color, barwidth });

  return (
    <div
      className={`relative w-48 h-3 rounded-lg`}
      style={{ backgroundColor: "#dddcdc", }}
    >
      <div
        className={`absolute h-full rounded-lg z-10`}
        style={{ width: barwidth, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
