import LottoRank from "../src/models/LottoRank";

const lotto = {
  checkMatchWithWinner: jest.fn(),
  checkBonus: jest.fn(),
};

describe("로또 랭크 테스트", () => {
  test("해당하는 로또 랭크를 반환하는지 확인", () => {
    lotto.checkMatchWithWinner.mockReturnValue(5);
    lotto.checkBonus.mockReturnValue(true);
    const lottoRank = new LottoRank();
    const result = lottoRank.calculateRank(lotto, [1, 2, 3, 4, 5, 6], 7);
    expect(result).toBe(2);
  });

  //jest 사용법 공부 좀더 해오기;
  test("알맞은 lottoResult 결과를 반환한다", () => {
    const lottoRank = new LottoRank();
    const mockLottos = [
      {
        checkMatchWithWinner: () => 3,
        checkBonus: () => false,
      },
      {
        checkMatchWithWinner: () => 4,
        checkBonus: () => false,
      },
      {
        checkMatchWithWinner: () => 5,
        checkBonus: () => false,
      },
    ];
    lottoRank.calculateLottoResult(mockLottos, [1, 2, 3, 4, 5, 6], 7);
    const result = lottoRank.lottoResult;
    expect(result[5]).toBe(1);
    expect(result[4]).toBe(1);
    expect(result[3]).toBe(1);
  });
});
