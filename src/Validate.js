export default class Validate {
  static checkInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] : 숫자or 정수가 아님");
    }
  }

  static checkRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] : 알맞은 범위가 아님");
    }
  }

  static checkAmount(amount) {
    this.checkInteger(amount);
    if (amount < 1000) {
      throw new Error("[ERROR] :1000원이하");
    }
    if (amount % 1000 != 0) {
      throw new Error("[ERROR] :1000원 으로 나누어 떨어지지 않음 ");
    }
  }

  static checkWinnNumbers(winNumbers) {
    if (winNumbers.length != 6) {
      throw new Error("[ERROR] :6개가 아님 ");
    }
    const winNumbersSet = new Set(winNumbers);
    if (winNumbersSet.size != winNumbers.length) {
      throw new Error("[ERROR] : 중복 포함");
    }
    winNumbers.forEach((number) => {
      this.checkInteger(number);
      this.checkRange(number);
    });
  }

  static checkBonusNumber(bonusNumber, winNumbers) {
    this.checkInteger(bonusNumber);
    this.checkRange(bonusNumber);
    if (winNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] : 중복 포함");
    }
  }
}
