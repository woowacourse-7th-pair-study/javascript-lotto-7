import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import View from './View.js';
import BonusNumber from './BonusNumber.js';

class App {
  #lottoMachine;
  #winnigLotto;
  #bonusNumber;
  async run() {
    await this.#makeLottoMachine();

    this.#lottoMachine.createLottos();
    View.printLotto(this.#lottoMachine.getLottosForPrint());

    const winningNumbersInput = await View.inputWinningNumbers();
    const parsedWinningNumbers = winningNumbersInput
      .split(',')
      .map((val) => Number(val.trim()));
    const winningLotto = new Lotto(parsedWinningNumbers);

    const bonusNumberInput = await View.inputBonusNumber();
    const parsedBonusNumber = Number(bonusNumberInput);
    const bonusNumber = new BonusNumber(parsedBonusNumber, winningLotto);

    this.#lottoMachine.calculateResult(winningLotto, bonusNumber);

    const resultString = this.#lottoMachine.getResultForPrint();
    View.printResult(resultString);
    View.printProfitRate(this.#lottoMachine.getProfitRate());
  }

  async #makeLottoMachine() {
    try {
      const purchaseAmountInput = await View.inputPurchaseAmount();
      const parsedPurchaseAmount = Number(purchaseAmountInput);
      this.#lottoMachine = new LottoMachine(parsedPurchaseAmount);
    } catch (error) {
      View.printError(error.message);
      await this.#makeLottoMachine();
    }
  }
}

export default App;
