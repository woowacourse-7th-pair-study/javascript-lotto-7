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

const isAmountInRange = (number) => {
  if (number < 1_000 || number > 100_000) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해 주세요.');
  }
}

const isNumberInRange = (number) => {
  if (number < 1 || number > 45) {
    throw new Error('[ERROR] 로또 번호는 1 이상 45 이하여야 합니다. 다시 입력해 주세요.');
  }
}

const isWrongUnit = (number) => {
  if (number % 1_000 !== 0) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다. 다시 입력해 주세요.');
  }
}

const isWrongLength = (numArray) => {
  if (numArray.length !== 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
}

const isDuplicateInArray = (numArray) => {
  const numSet = new Set(numArray);
  if (numSet.size !== numArray.length) {
    throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다. 다시 입력해 주세요.');
  }
}

const isDuplicate = (number, numArray) => {
  if (numArray.includes(number)) {
    throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다. 다시 입력해 주세요.');
  }
}

export const validateAmount = (number) => {
  isNaN(number);
  isInteger(number);
  isAmountInRange(number);
  isWrongUnit(number);
};

export const validateWinningNumbers = (numArray) => {
  isWrongLength(numArray);
  isDuplicateInArray(numArray);
  numArray.forEach((number) => {
    isNaN(number);
    isInteger(number);
    isNumberInRange(number);
  });
};

export const validateBonusNumber = (number, numArray) => {
  isNaN(number);
  isInteger(number);
  isNumberInRange(number);
  isDuplicate(number, numArray);
};
