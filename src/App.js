import InputView from './view/InputView.js';
import tryInput from './util/tryInput.js';
import parser from './util/parser.js';
import {
  validateAmount,
  validateBonusNumber,
  validateWinningNumbers,
} from './util/validation.js';
import Lotto from './model/Lotto.js';

class App {
  async run() {
    const amount = await tryInput(() => this.getAmount());
    const winningNumbers = await tryInput(() => this.getWinningNumbers());
    const bonusNumber = await tryInput(() =>
      this.getBonusNumber(winningNumbers),
    );

    const lottoInstanceArray = this.#buyLotto(amount);
    // 당첨 계산하기 (Lotto에서 발행된 로또를 하나씩 저장하여 당첨 번호와 보너스 번호 검증해서 당첨 개수 반환)
    lottoInstanceArray.forEach((lottoInstance) => {
      // lottoInstance
    });
  }

  #buyLotto(amount) {
    // 로또 발행하기
    const issuedLottos = generateLotto(amount);

    return issuedLottos.map((lotto) => new Lotto(lotto));
  }

  async getAmount() {
    const amount = await InputView.readAmount();

    const parsedAmount = parser.stringToNumber(amount);
    validateAmount(parsedAmount);

    return parsedAmount;
  }

  async getWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbers();

    const parsedWinningNumbers = parser.stringToArray(winningNumbers);
    validateWinningNumbers(parsedWinningNumbers);

    return parsedWinningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    const bonusNumber = await InputView.readBonusNumber();

    const parsedBonusNumber = parser.stringToNumber(bonusNumber);
    validateBonusNumber(parsedBonusNumber, winningNumbers);

    return parsedBonusNumber;
  }
}

export default App;
