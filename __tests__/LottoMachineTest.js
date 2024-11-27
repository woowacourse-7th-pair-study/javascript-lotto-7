import LottoMachine from "../src/LottoMachine.js";
import { ERROR_MESSAGE } from "../src/constant/messgae.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
};

describe("Lotto Machine 클래스 테스트", () => {
  // let winningLotto;
  // beforeEach(() => {
  //   winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
  // });
  test("구입 금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    const parsedPurchaseAmount = Number("string");
    expect(() => {
      new LottoMachine(parsedPurchaseAmount);
    }).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  test("구입 금액이 정수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine(8000.3);
    }).toThrow(ERROR_MESSAGE.NOT_INTEGER);
  });

  test("구입 금액이 1,000원 이하인 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine(900);
    }).toThrow(ERROR_MESSAGE.UNDER_LOTTO_PRICE);
  });

  test("구입 금액이 1,000원 나눠떨어지지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine(1350);
    }).toThrow(ERROR_MESSAGE.NOT_DIVIDED);
  });

  test("구입금액에 맞게 로또가 발행된다.", () => {
    const purchaseAmount = 3000;
    const lottoMachine = new LottoMachine(purchaseAmount);

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ]);
    lottoMachine.createLottos();

    expect(lottoMachine.getLottosForPrint()).toEqual({
      count: 3,
      lottoStrings: ["[1, 2, 3, 4, 5, 6]", "[7, 8, 9, 10, 11, 12]", "[13, 14, 15, 16, 17, 18]"],
    });
  });
});
