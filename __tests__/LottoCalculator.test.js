import LottoCalculator from '../src/model/LottoCalculator.js';

describe('LottoCalculator 클래스 테스트', () => {
  describe('getProfitRate(): 로또로 벌어들인 수익률을 계산해 반환한다.', () => {
    test.each([
      // given
      ['6,000원 구매, 5등 3개 당첨', { statistics: [0, 0, 0, 0, 3], amount: 6000, expected: '250.0'}],
      ['6,000원 구매, 4등 3개 당첨', { statistics: [0, 0, 0, 3, 0], amount: 6000, expected: '2,500.0'}],
      ['6,000원 구매, 3등 2개 당첨', { statistics: [0, 0, 2, 0, 0], amount: 6000, expected: '50,000.0'}],
      ['6,000원 구매, 2등 3개 당첨', { statistics: [0, 2, 0, 0, 0], amount: 6000, expected: '1,000,000.0'}],
      ['100,000원 구매, 1등 1개 당첨', { statistics: [1, 0, 0, 0, 0], amount: 100_000, expected: '2,000,000.0'}],
      ['100,000원 구매, 5등 2개 당첨', { statistics: [0, 0, 0, 0, 2], amount: 100_000, expected: '10.0'}],
    ])('%s', (_, { statistics, amount, expected }) => {  
      // when
      const lottoCalculator = new LottoCalculator(statistics, amount);
      const profitRate = lottoCalculator.getProfitRate();
  
      // then
      expect(profitRate).toEqual(expected);
    });
  });
});
