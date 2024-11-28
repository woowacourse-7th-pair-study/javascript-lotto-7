import LottoCalculator from '../src/model/LottoCalculator.js';

// import { LOTTO_RANK_INDEX, LOTTO_RANK_PRIZE } from '../src/constant/lotto.js';

describe('LottoCalculator 클래스 테스트', () => {
  test('getProfitRate(): 로또로 벌어들인 수익률을 계산해 반환한다.', () => {
    //given
    const statistics = [0, 0, 0, 0, 3];
    const amount = 6000;
    const expected = '250.0';

    // when
    const lottoCalculator = new LottoCalculator(statistics, amount);
    const profitRate = lottoCalculator.getProfitRate();

    // then
    expect(profitRate).toEqual(expected);
  });
});
