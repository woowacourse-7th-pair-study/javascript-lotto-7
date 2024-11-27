import Lotto from "../src/models/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 중 당첨 번호와 일치하는 번화의 개수를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    const testNumbers = [1, 2, 3, 10, 11, 12];

    const result = lotto.checkMatchWithWinner(testNumbers);

    expect(result).toBe(3);
  });

  test.each([
    [1, true],
    [10, false],
  ])(
    "로또 번호 중 보너스 번호(%s)를 포함하는지 결과를 반환한다 - %s",
    (bonus, result) => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

      const isBonus = lotto.checkBonus(bonus);

      expect(isBonus).toBe(result);
    }
  );
});
