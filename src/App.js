import Lotto from "./Lotto.js";
import LottoMachine from "./LottoMachine.js";
import View from "./View.js";
import BonusNumber from "./BonusNumber.js";

class App {
  #lottoMachine;
  #winningLotto;
  #bonusNumber;

  async run() {
    await this.#makeLottoMachine();

    this.#lottoMachine.createLottos();
    View.printLotto(this.#lottoMachine.getLottosForPrint());

    await this.#makeWinningLotto();

    await this.#makeBonusNumber();

    this.#lottoMachine.calculateResult(this.#winningLotto, this.#bonusNumber);

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

  async #makeWinningLotto() {
    try {
      const winningNumbersInput = await View.inputWinningNumbers();
      const parsedWinningNumbers = winningNumbersInput.split(",").map((val) => Number(val.trim()));
      this.#winningLotto = new Lotto(parsedWinningNumbers);
    } catch (error) {
      View.printError(error.message);
      await this.#makeWinningLotto();
    }
  }

  async #makeBonusNumber() {
    try {
      const bonusNumberInput = await View.inputBonusNumber();
      const parsedBonusNumber = Number(bonusNumberInput);
      this.#bonusNumber = new BonusNumber(parsedBonusNumber, this.#winningLotto);
    } catch (error) {
      View.printError(error.message);
      await this.#makeBonusNumber();
    }
  }
}

export default App;
