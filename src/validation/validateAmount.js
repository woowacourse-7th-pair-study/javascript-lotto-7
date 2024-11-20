export const validateAmount = (amount) => {
  if (Number.isNaN(amount)) {
    throw new Error("[ERROR] 숫자를 입력해야 한다.");
  }

  if (amount < 1000) {
    throw new Error("[ERROR] 1000원 이상으로 입력해야 한다.");
  }

  if (amount % 1000 !== 0) {
    throw new Error("[ERROR] 100원 단위로 입력해야 한다.");
  }
};
