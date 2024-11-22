import Lotto from "../src/models/Lotto.js";

describe("로또 클래스 테스트", () => {
  test.each([
    {
      description: "로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.",
      input: "1, 2, 3, 4, 5, 6, 7",
      errorMessage: "[ERROR]",
    },
    {
      description: "로또 번호에 중복된 숫자가 있으면 예외가 발생한다.",
      input: "1, 2, 3, 4, 5, 5",
      errorMessage: "[ERROR]",
    },
  ])("%s", ({ input, errorMessage }) => {
    expect(() => {
      new Lotto(input);
    }).toThrow(errorMessage);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
