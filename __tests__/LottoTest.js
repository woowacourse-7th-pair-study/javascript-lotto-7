import Lotto from '../src/model/Lotto.js';

import { LOTTO_RANK_INDEX } from '../src/constant/lotto.js';

describe('로또 클래스 테스트', () => {
  describe('getWinningRank(): 당첨 번호와 보너스 번호를 통해 발행된 해당 로또 번호의 당첨 등수를 반환한다.', () => {
    let lotto;
    beforeEach(() => {
      const issuedNumbers = [1, 2, 3, 4, 5, 6];
      lotto = new Lotto(issuedNumbers);
    });
    test.each([
      [
        '3개 일치',
        {
          winningNumbers: [1, 2, 3, 7, 8, 9],
          bonusNumber: 10,
          expectRank: LOTTO_RANK_INDEX.fifth,
        },
      ],
      [
        '4개 일치',
        {
          winningNumbers: [1, 2, 3, 4, 8, 9],
          bonusNumber: 10,
          expectRank: LOTTO_RANK_INDEX.fourth,
        },
      ],
      [
        '5개 일치',
        {
          winningNumbers: [1, 2, 3, 4, 5, 9],
          bonusNumber: 10,
          expectRank: LOTTO_RANK_INDEX.third,
        },
      ],
      [
        '5개 일치 + 보너스 일치',
        {
          winningNumbers: [1, 2, 3, 4, 5, 10],
          bonusNumber: 6,
          expectRank: LOTTO_RANK_INDEX.second,
        },
      ],
      [
        '6개 일치',
        {
          winningNumbers: [1, 2, 3, 4, 5, 6],
          bonusNumber: 10,
          expectRank: LOTTO_RANK_INDEX.first,
        },
      ],
    ])('%s', (_, { winningNumbers, bonusNumber, expectRank }) => {
      // when
      const winningRank = lotto.getWinningRank(winningNumbers, bonusNumber);

      // then
      expect(winningRank).toBe(expectRank);
    });
  });
});
