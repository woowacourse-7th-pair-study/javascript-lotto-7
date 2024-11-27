import Lotto from "./Lotto.js";
import LottoMachine from "./LottoMachine.js";
import View from "./View.js";
import BonusNumber from "./BonusNumber.js";

class App {
  async run() {
    const purchaseAmountInput = await View.inputPurchaseAmount();
    const parsedPurchaseAmount = Number(purchaseAmountInput);
    const lottoMachine = new LottoMachine(parsedPurchaseAmount);

    lottoMachine.createLottos();
    View.printLotto(lottoMachine.getLottosForPrint());

    const winningNumbersInput = await View.inputWinningNumbers();
    const parsedWinningNumbers = winningNumbersInput.split(",").map((val) => Number(val.trim()));
    const winningLotto = new Lotto(parsedWinningNumbers);

    const bonusNumberInput = await View.inputBonusNumber();
    const parsedBonusNumber = Number(bonusNumberInput);
    const bonusNumber = new BonusNumber(parsedBonusNumber, winningLotto);

    lottoMachine.calculateResult(winningLotto, bonusNumber);

    const resultString = lottoMachine.getResultForPrint();
    View.printResult(resultString);
  }
}

export default App;
