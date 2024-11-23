import LottoMachine from './LottoMachine.js';
import LottoResult from './LottoResult.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputVeiw.js';

export default class Controller {
  async play() {
    const amount = await InputView.getAmount();
    const winNumber = await InputView.getWinNumber();
    const bonusNumber = await InputView.getBonusNumber(winNumber);
    const lottoMachine = new LottoMachine();
    lottoMachine.generateLotto(amount);
    OutputView.printCount(lottoMachine.count);
    const lottoStrings = lottoMachine.getLottosNumberString();
    OutputView.printLottos(lottoStrings);
    const lottoResult = new LottoResult(winNumber, bonusNumber);

    const matchCount = lottoResult.matchCount(lottoMachine.lottos);
    lottoResult.generateResult(matchCount);
    console.log(lottoResult.result);
  }
}
