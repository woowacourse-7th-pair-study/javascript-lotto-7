import LottoIssue from "../src/models/LottoIssue.js";
import { mockRandoms } from "../src/utils/testUtils.js";

describe("LottoIssue 클래스 테스트", () => {
  test.each([
    {
      description: "로또 구입 금액이 숫자가 아닌 경우 예외가 발생한다.",
      input: "1000j",
      errorMessage: "[ERROR] 숫자가 아닙니다. 다시 입력해주세요.",
    },
    {
      description: "로또 구입 금액이 정수가 아닌 경우 예외가 발생한다.",
      input: "1000.5",
      errorMessage: "[ERROR] 정수가 아닙니다. 다시 입력해주세요.",
    },
    {
      description: "로또 구입 금액이 1,000원 단위가 아닌 경우 예외가 발생한다.",
      input: "1350",
      errorMessage: "[ERROR] 1,000원 단위가 아닙니다. 다시 입력해주세요.",
    },
    {
      description: "로또 구입 금액이 1,000원 이상 100,000원 이하가 아닌 경우 예외가 발생한다.",
      input: "0",
      errorMessage: "[ERROR] 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해주세요.",
    },
    {
      description: "로또 구입 금액이 1,000원 이상 100,000원 이하가 아닌 경우 예외가 발생한다.",
      input: "500000",
      errorMessage: "[ERROR] 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해주세요.",
    },
  ])("%s", ({ input, errorMessage }) => {
    expect(() => {
      new LottoIssue(input);
    }).toThrow(errorMessage);
  });

  test.each([
    "1000",
    "100000",
  ])("올바른 로또 구입 금액을 입력했을 경우 예외가 발생하지 않는다.", (input) => {
    expect(() => {
      new LottoIssue(input);
    }).not.toThrow();
  });

  test("로또 구입 금액에 맞게 로또를 랜덤으로 발행하여 반환한다.", () => {
    // given
    const lottoPurchase = "3000";
    const randomNumbers = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];
    mockRandoms(randomNumbers);

    // when 
    const lottoIssue = new LottoIssue(lottoPurchase);
    const expectedIssuedLotto = lottoIssue.getIssuedLotto();
    // then 
    expect(expectedIssuedLotto).toEqual(randomNumbers);
  });
});
