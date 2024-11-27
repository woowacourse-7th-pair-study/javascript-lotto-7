import BonusNumber from "../src/BonusNumber.js";
import Lotto from "../src/Lotto.js";
import { ERROR_MESSAGE } from "../src/constant/messgae.js";

describe("보너스 번호 클래스 테스트", () => {
  let winningLotto;
  beforeEach(() => {
    winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  test("보너스 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber("string", winningLotto);
    }).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  test("보너스 번호가 정수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(8.3, winningLotto);
    }).toThrow(ERROR_MESSAGE.NOT_INTEGER);
  });

  test("보너스 번호가 범위에서 벗어난 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(-3, winningLotto);
    }).toThrow(ERROR_MESSAGE.NOT_IN_RANGE);
  });

  test("보너스 번호가 로또 번호와 중복되는 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(3, winningLotto);
    }).toThrow(ERROR_MESSAGE.NO_DUPLICATE_NUMBER);
  });
});
