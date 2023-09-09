const colorCode = (remaining: number, total: number) => {
  const percentage = (remaining / total) * 100;

  if (Number.isNaN(percentage)) {
    return "";
  }
  if (percentage >= 50) {
    return "bg-green-200";
  }
  if (percentage >= 30 && percentage < 50) {
    return "bg-yellow-200";
  }
  if (percentage < 30) {
    return "bg-red-200";
  }
  return "";
};

export default colorCode;

export const savingsColor = (totalContributed: number, totalGoal: number) => {
  const percentage = (totalContributed / totalGoal) * 100;

  if (Number.isNaN(percentage)) {
    return "";
  }
  if (percentage >= 80) {
    return "bg-green-200";
  }
  if (percentage >= 40 && percentage < 80) {
    return "bg-yellow-200";
  }
  if (percentage < 40) {
    return "bg-red-200";
  }
  return "";
};
