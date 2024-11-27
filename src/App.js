import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import View from './View.js';

class App {
  async run() {
    const purchaseAmountInput = await View.inputPurchaseAmount();
    const lottoMachine = new LottoMachine(purchaseAmountInput);
    lottoMachine.createLottos();
    View.printLotto(lottoMachine.getLottosForPrint());
    const winningNumbersInput = await View.inputWinningNumbers();
    const winningLotto = new Lotto(winningNumbersInput);
    const bonusNumberInput = await View.inputBonusNumber();
  }
}

export default App;
