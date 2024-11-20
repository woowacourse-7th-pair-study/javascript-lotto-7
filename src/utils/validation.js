const isNumber = (number) => {
  return !Number.isNaN(number);
};

const isInteger = (number) => {
  return Number.isInteger(number);
};

const isInRange = (number) => {
  return number >= 1 && number <= 45;
};

const validation = {
  isNumber,
  isInteger,
  isInRange,
};

export default validation;
