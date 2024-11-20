export const AmountValidator = {
  amount(value) {
    this.isNaN(value);
    this.isWrongUnit(value);
  },
  isNaN(value) {
    if (Number.isNaN(value)) {
      throw new Error("[ERROR]");
    }
  },
  isWrongUnit(value) {
    if (value % 1000 != 0) {
      throw new Error("[ERROR]");
    }
  },
};

export const NumbersValidator = {
  winningNumbers(value) {
    this.isWrongLength(value);

    value.forEach((number) => {
      this.isNaN(number);
      this.isNumberInBoundary(number);
    });
  },
  number(winningNumbers, bonus) {
    this.isNaN(bonus);
    this.isDuplicated(winningNumbers, bonus);
  },

  isDuplicated(winningNumbers, bonus) {
    if (winningNumbers.includes(bonus)) {
      throw new Error("[ERROR]");
    }
  },

  isNaN(value) {
    if (Number.isNaN(value)) {
      throw new Error("[ERROR]");
    }
  },
  isWrongLength(value) {
    if (value.length != 6) {
      throw new Error("[ERROR]");
    }
  },
  isNumberInBoundary(value) {
    if (value > 45 || 1 > value) {
      throw new Error("[ERROR]");
    }
  },
};
