import CreditOrDebit from "../@types/creditOrDebit";

const green = "bg-green-200";
const yellow = "bg-yellow-200";
const red = "bg-red-200";

const colorCode = (remaining: number, total: number) => {
  const percentage = (remaining / total) * 100;

  if (Number.isNaN(percentage)) {
    return "";
  }
  if (percentage >= 50) {
    return green;
  }
  if (percentage >= 30 && percentage < 50) {
    return yellow;
  }
  if (percentage < 30) {
    return red;
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
    return green;
  }
  if (percentage >= 40 && percentage < 80) {
    return yellow;
  }
  if (percentage < 40) {
    return red;
  }
  return "";
};

export const creditDebitColor = (creditOrDebit: CreditOrDebit) => {
  switch (creditOrDebit) {
    case CreditOrDebit.Credit:
      return green;
    case CreditOrDebit.Debit:
      return red;
    default:
      return red;
  }
};
