export default function getColor(percentage) {
  if (percentage >= 90) {
    return '#2EC971';
  } else if (percentage >= 80) {
    return '#438AF6';
  } else if (percentage >= 50) {
    return '#FF9142';
  } else {
    return '#FB5E5E';
  }
}
