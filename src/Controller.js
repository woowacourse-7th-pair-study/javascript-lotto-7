import LottoMachine from "./LottoMachine.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputVeiw.js";

export default class Controller {
  async play() {
    const amount = await InputView.getAmount();
    const winNumber = await InputView.getWinNumber();
    const bonusNumber = await InputView.getBonusNumber(winNumber);
    const lottoMachine = new LottoMachine();
    lottoMachine.generateLotto(amount);
    const count = lottoMachine.count;
    OutputView.printCount(count);
    const lottoStrings = lottoMachine.getLottosNumberString();
    OutputView.printLottos(lottoStrings);
  }
}
