import { LOTTO_BOUNDARY, SERVICE_CONSTANTS } from "../constants.js";

export const amountValidator = (value) => {
  isNaN(value);
  isZero(value);
  isInteger(value);
  isWrongUnit(value);
};

export const winningNumbersValidator = (value) => {
  isWrongLength(value);

  value.forEach((number) => {
    isNaN(number);
    isInteger(number);
    isNumberInBoundary(number);
  });
};

export const bonusNumberValidator = (winningNumbers, bonus) => {
  isNaN(bonus);
  isInteger(bonus);
  isDuplicated(winningNumbers, bonus);
  isNumberInBoundary(bonus);
};

const isNaN = (value) => {
  if (Number.isNaN(value)) {
    throw new Error("[ERROR]");
  }
};
const isWrongUnit = (value) => {
  if (value % SERVICE_CONSTANTS.initial_amount != 0) {
    throw new Error("[ERROR]");
  }
};
const isDuplicated = (winningNumbers, bonus) => {
  if (winningNumbers.includes(bonus)) {
    throw new Error("[ERROR]");
  }
};
const isWrongLength = (value) => {
  if (
    value.length != LOTTO_BOUNDARY.length ||
    new Set(value).size != LOTTO_BOUNDARY.length
  ) {
    throw new Error("[ERROR]");
  }
};
const isNumberInBoundary = (value) => {
  if (value > LOTTO_BOUNDARY.max || LOTTO_BOUNDARY.min > value) {
    throw new Error("[ERROR]");
  }
};
const isZero = (value) => {
  if (value == 0) {
    throw new Error("[ERROR]");
  }
};

const isInteger = (value) => {
  if (!Number.isInteger(value)) {
    throw new Error("[ERROR]");
  }
};
