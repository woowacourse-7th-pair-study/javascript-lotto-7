const isNaN = (number) => {
  if (Number.isNaN(number)) {
    throw new Error('[ERROR] 숫자가 아닙니다. 다시 입력해 주세요.');
  }
};

const isInteger = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error('[ERROR] 정수가 아닙니다. 다시 입력해 주세요.');
  }
};

export const validateAmount = (number) => {
  isNaN(number);
  isInteger(number);
};

export const validateWinningNumbers = (numArray) => {
  numArray.forEach((number) => {
    isNaN(number);
    isInteger(number);
  });
};

export const validateBonusNumber = (number) => {
  isNaN(number);
  isInteger(number);
};
