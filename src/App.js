import LottoMachine from "./LottoMachine.js";
import View from "./View.js";

class App {
  async run() {
    const purchaseAmountInput = await View.inputPurchaseAmount();
    const lottoMachine = new LottoMachine(purchaseAmountInput);
    lottoMachine.createLottos();
  }
}

export default App;
