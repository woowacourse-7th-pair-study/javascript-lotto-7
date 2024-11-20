import LottoIssue from "../models/LottoIssue.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class Controller {
  async start() {
    const lottoPurchase = await InputView.readLottoPurchase();

    const lottoIssue = new LottoIssue(lottoPurchase);
    const issuedLotto = lottoIssue.getIssuedLotto();
    OutputView.printIssuedLotto(issuedLotto);
  }
}

export default Controller;
