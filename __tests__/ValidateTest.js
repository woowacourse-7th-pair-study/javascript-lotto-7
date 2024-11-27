import Validate from "../src/Validate";

describe("validate 테스트", () => {
  test("amount test", () => {
    expect(() => Validate.checkAmount("ㅁ")).toThrow("[ERROR]");
    expect(() => Validate.checkAmount(100)).toThrow("[ERROR]");
    expect(() => Validate.checkAmount(10001)).toThrow("[ERROR]");
    expect(() => Validate.checkAmount(2000)).not.toThrow("[ERROR]");
  });

  test.each([
    [1, 2, 3],
    [1, 2, 1, 1, 1, 1],
    [1, 100, 2, 3, 4, 5],
    ["ㅁ", 1, 2, 3, 4, 5],
  ])("winNumbers test가 에러를 던지는지 확인", (numbers) => {
    expect(() => Validate.checkWinnNumbers(numbers)).toThrow("[ERROR]");
  });

  test("알맞은 winumbers를 입력하면 에러 안던짐", () => {
    expect(() => Validate.checkWinnNumbers([1, 2, 3, 4, 5, 6])).not.toThrow();
  });
  test.each(["A", 100, 1.1, 1])(
    "BonusNumbers test가 에러를 던지는지 확인",
    (numbers) => {
      const winNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => Validate.checkBonusNumber(numbers, winNumbers)).toThrow(
        "[ERROR]"
      );
    }
  );
  test("알맞은 bonusumbers를 입력하면 에러 안던짐", () => {
    expect(() =>
      Validate.checkBonusNumber(7, [1, 2, 3, 4, 5, 6])
    ).not.toThrow();
  });
});
