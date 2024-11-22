import Lotto from "../src/models/Lotto.js";

describe("Lotto 클래스 테스트", () => {
  test.each([
    {
      description: "로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.",
      input: "1, 2, 3, 4, 5, 6, 7",
      errorMessage: "[ERROR] 로또 번호는 6개여야 합니다.",
    },
    {
      description: "로또 번호에 숫자가 아닌 경우 예외가 발생한다.",
      input: "1, 2, 3, string, 5, 6",
      errorMessage: "[ERROR] 숫자가 아닙니다. 다시 입력해주세요.",
    },
    {
      description: "로또 번호에 정수가 아닌 경우 예외가 발생한다.",
      input: "1, 2, 3, 4, 5, 6.6",
      errorMessage: "[ERROR] 정수가 아닙니다. 다시 입력해주세요.",
    },
    {
      description: "로또 번호가 1 이상 45 이하가 아닌 경우 예외가 발생한다.",
      input: "1, 2, 3, 4, 5, 46",
      errorMessage: "[ERROR] 로또 번호는 1 이상 45 이하의 숫자만 가능합니다. 다시 입력해주세요.",
    },
    {
      description: "로또 번호에 중복된 숫자가 있으면 예외가 발생한다.",
      input: "1, 2, 3, 4, 5, 5",
      errorMessage: "[ERROR] 당첨 번호는 중복될 수 없습니다. 다시 입력해주세요.",
    },
  ])("%s", ({ input, errorMessage }) => {
    expect(() => {
      new Lotto(input);
    }).toThrow(errorMessage);
  });

  test.each([
    "1, 2, 3, 4, 5, 6",
    "45, 43, 22, 14, 16, 17",
  ])("올바른 로또 번호를 입력했을 경우 예외가 발생하지 않는다.", (input) => {
    expect(() => {
      new Lotto(input);
    }).not.toThrow();
  });
});
