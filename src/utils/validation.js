const isNumber = (number) => {
  return !Number.isNaN(number);
};

const isInteger = (number) => {
  return !Number.isInteger(number);
};

const validation = {
  isNumber,
  isInteger,
};

export default validation;
