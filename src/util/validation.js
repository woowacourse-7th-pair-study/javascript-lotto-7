import { LOTTO_RULE } from '../constant/lotto.js';

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
  if (number < LOTTO_RULE.UNIT || number > LOTTO_RULE.MAX_AMOUNT) {
    throw new Error(
      '[ERROR] 로또 구입 금액은 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해 주세요.',
    );
  }
};

const isNumberInRange = (number) => {
  if (number < LOTTO_RULE.MIN_RANGE || number > LOTTO_RULE.MAX_RANGE) {
    throw new Error(
      '[ERROR] 로또 번호는 1 이상 45 이하여야 합니다. 다시 입력해 주세요.',
    );
  }
};

const isWrongUnit = (number) => {
  if (number % LOTTO_RULE.UNIT !== 0) {
    throw new Error(
      '[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다. 다시 입력해 주세요.',
    );
  }
};

const isWrongLength = (numArray) => {
  if (numArray.length !== LOTTO_RULE.LENGTH) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
};

const isDuplicateInArray = (numArray) => {
  const numSet = new Set(numArray);
  if (numSet.size !== numArray.length) {
    throw new Error(
      '[ERROR] 로또 번호는 중복될 수 없습니다. 다시 입력해 주세요.',
    );
  }
};

const isDuplicate = (number, numArray) => {
  if (numArray.includes(number)) {
    throw new Error(
      '[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다. 다시 입력해 주세요.',
    );
  }
};

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
