import { MissionUtils } from '@woowacourse/mission-utils';
import BonusNumber from '../src/BonusNumber.js';
import Lotto from '../src/Lotto.js';
import LottoMachine from '../src/LottoMachine.js';
import { ERROR_MESSAGE } from '../src/constant/messgae.js';
import { LOTTO_PRIZE_INFO } from '../src/constant/lottoRule.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('Lotto Machine 클래스 테스트', () => {
  // let winningLotto;
  // beforeEach(() => {
  //   winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
  // });
  test('구입 금액이 숫자가 아닌 경우 예외가 발생한다.', () => {
    const parsedPurchaseAmount = Number('string');
    expect(() => {
      new LottoMachine(parsedPurchaseAmount);
    }).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  test('구입 금액이 정수가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoMachine(8000.3);
    }).toThrow(ERROR_MESSAGE.NOT_INTEGER);
  });

  test('구입 금액이 1,000원 이하인 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoMachine(900);
    }).toThrow(ERROR_MESSAGE.UNDER_LOTTO_PRICE);
  });

  test('구입 금액이 1,000원 나눠떨어지지 않는 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoMachine(1350);
    }).toThrow(ERROR_MESSAGE.NOT_DIVIDED);
  });

  test('구입금액에 맞게 로또가 발행된다.', () => {
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
      lottoStrings: [
        '[1, 2, 3, 4, 5, 6]',
        '[7, 8, 9, 10, 11, 12]',
        '[13, 14, 15, 16, 17, 18]',
      ],
    });
  });

  test('당첨 결과를 계산한다.', () => {
    const purchaseAmount = 3000;
    const lottoMachine = new LottoMachine(purchaseAmount);
    const winningLotto = new Lotto([1, 3, 5, 7, 9, 11]);
    const bonusNumber = new BonusNumber(18, winningLotto);

    mockRandoms([
      [1, 3, 5, 7, 9, 11],
      [3, 5, 7, 9, 11, 13],
      [3, 5, 7, 9, 11, 18],
    ]);
    lottoMachine.createLottos();
    lottoMachine.calculateResult(winningLotto, bonusNumber);

    expect(lottoMachine.getResultForPrint()).toEqual([
      {
        string: LOTTO_PRIZE_INFO[1].string,
        price: LOTTO_PRIZE_INFO[1].price,
        count: 1,
      },
      {
        string: LOTTO_PRIZE_INFO[2].string,
        price: LOTTO_PRIZE_INFO[2].price,
        count: 1,
      },
      {
        string: LOTTO_PRIZE_INFO[3].string,
        price: LOTTO_PRIZE_INFO[3].price,
        count: 1,
      },
      {
        string: LOTTO_PRIZE_INFO[4].string,
        price: LOTTO_PRIZE_INFO[4].price,
        count: 0,
      },
      {
        string: LOTTO_PRIZE_INFO[5].string,
        price: LOTTO_PRIZE_INFO[5].price,
        count: 0,
      },
    ]);

    expect(lottoMachine.getProfitRate()).toEqual('67,716,666.7');
  });
});
