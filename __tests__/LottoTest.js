import Lotto from '../src/model/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('getWinningRank(): 당첨 번호와 보너스 번호를 통해 발행된 해당 로또 번호의 당첨 등수를 반환한다.', () => {
    // given
    const issuedNumbers = [ 1, 2, 3, 4, 5, 6 ];
    const winningNumbers = 
    const bonusNumber = 


    // when
    const lotto = new Lotto(issuedNumbers);
    const winningRank = lotto.getWinningRank(winningNumbers, bonusNumber);

    // then
    expect()
  });
});
