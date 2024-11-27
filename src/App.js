import InputView from './view/InputView.js';
import tryInput from './util/tryInput.js';

import {
  validateAmount,
  validateBonusNumber,
  validateWinningNumbers,
} from './util/validation.js';

class App {
  async run() {
    const amount = await tryInput(() => this.getAmount());
  }

  async getAmount() {
    const amount = await InputView.readAmount();

    // validateAmount()

    return amount;
  }

  async getWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbers();

    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await InputView.readBonusNumber();

    return bonusNumber;
  }
}

export default App;
