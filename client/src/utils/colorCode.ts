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
};

export default colorCode;
