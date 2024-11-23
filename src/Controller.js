import LottoMachine from "./LottoMachine.js";
import LottoResult from "./LottoResult.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputVeiw.js";

export default class Controller {
  #lottoMachine;

  generateLottoMachine(amount) {
    this.#lottoMachine = new LottoMachine();
    this.#lottoMachine.generateLotto(amount);
  }

  printCountAndLottos() {
    const lottoStrings = this.#lottoMachine.getLottosNumberString();
    OutputView.printCount(this.#lottoMachine.count);
    OutputView.printLottos(lottoStrings);
  }

  async getNumbers() {
    const winNumber = await InputView.getWinNumber();
    const bonusNumber = await InputView.getBonusNumber(winNumber);
    return { winNumber, bonusNumber };
  }

  calculateResult(winNumber, bonusNumber) {
    const lottoResult = new LottoResult(winNumber, bonusNumber);
    const matchCount = lottoResult.matchCount(this.#lottoMachine.lottos);
    lottoResult.generateResult(matchCount);
    const result = lottoResult.result;
    const winAmount = lottoResult.calculateWinAmount();
    return { result, winAmount };
  }

  printResultAndWinRate(result, winAmount, amount) {
    OutputView.printResult(result);
    OutputView.printWinRate(winAmount, amount);
  }

  async play() {
    const amount = await InputView.getAmount();
    this.generateLottoMachine(amount);
    this.printCountAndLottos();

    const { winNumber, bonusNumber } = await this.getNumbers();
    const { result, winAmount } = this.calculateResult(winNumber, bonusNumber);

    this.printResultAndWinRate(result, winAmount, amount);
  }
}
