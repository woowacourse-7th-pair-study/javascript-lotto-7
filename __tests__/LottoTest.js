import { ERROR_MESSAGE } from "../src/constant/messgae";
import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.NO_DUPLICATE_NUMBER);
  });

  test("로또 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "string"]);
    }).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  test("로또 번호가 정수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 8.3]);
    }).toThrow(ERROR_MESSAGE.NOT_INTEGER);
  });

  test("로또 번호가 범위에서 벗어난 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 47]);
    }).toThrow(ERROR_MESSAGE.NOT_IN_RANGE);
  });
});
