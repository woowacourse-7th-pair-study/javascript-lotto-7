import InputView from './view/InputView.js';
import tryInput from './util/tryInput.js';
import parser from './util/parser.js';
import {
  validateAmount,
  validateBonusNumber,
  validateWinningNumbers,
} from './util/validation.js';

class App {
  async run() {
    const amount = await tryInput(() => this.getAmount());
    const winningNumbers = await tryInput(() => this.getWinningNumbers());
    const bonusNumber = await tryInput(() =>
      this.getBonusNumber(winningNumbers),
    );
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
