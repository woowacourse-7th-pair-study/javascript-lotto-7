import LottoIssue from "../models/LottoIssue.js";
import Lotto from "../models/Lotto.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import BonusNumber from "../models/BonusNumber.js";
import LottoResult from "../models/LottoResult.js";

class Controller {
  async start() {
    const issuedLotto = await this.#inputPurchase();
    OutputView.printIssuedLotto(issuedLotto);

    const winningLottoNumbers = await this.#inputWinningLottoNumbers();

    const bonusNumber = await this.#inputBonusNumber(winningLottoNumbers);

    const lottoResult = new LottoResult();
    lottoResult.calculate(issuedLotto, winningLottoNumbers, bonusNumber);

    OutputView.printResult(lottoResult.getLottoResult());
  }

  async #inputPurchase() {
    try {
      const lottoPurchase = await InputView.readLottoPurchase();
      const lottoIssue = new LottoIssue(lottoPurchase);
      return lottoIssue.getIssuedLotto();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.#inputPurchase();
    }
  }

  async #inputWinningLottoNumbers() {
    try {
      const winningLottoNumbers = await InputView.readWinningLottoNumbers();
      const lotto = new Lotto(winningLottoNumbers);
      return lotto.getNumbers();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.#inputWinningLottoNumbers();
    }
  }

  async #inputBonusNumber(winningLottoNumbers) {
    try {
      const inputBonusNumber = await InputView.readBonusNumbers();
      const bonusNumber = new BonusNumber(inputBonusNumber, winningLottoNumbers);
      return bonusNumber.getBonusNumber();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.#inputBonusNumber(winningLottoNumbers);
    }
  }
}

export default Controller;
