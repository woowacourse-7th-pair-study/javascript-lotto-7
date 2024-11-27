import InputHandler from "../InputHandler.js";
import LottoMachine from "../models/LottoMachine.js";
import LottoRank from "../models/LottoRank.js";
import OutputView from "../Views/OutputView.js";

class LottoController {
  #lottoCount;
  #lottos;
  #lottoRank;

  constructor() {
    this.#lottoCount = 0;
    this.#lottoRank = new LottoRank();
  }

  async playLotto() {
    const amount = await InputHandler.amount();

    this.#lottoCount = amount / 1000;

    OutputView.printLottoCount(this.#lottoCount);

    this.#lottos = LottoMachine.generateLottos(this.#lottoCount);
    const lottoNumbers = this.#lottos.map((lotto) => lotto.numbers);
    OutputView.printLottos(lottoNumbers);

    const winNumbers = await InputHandler.winNumbers();
    const bonus = await InputHandler.bonusNumber(winNumbers);

    this.#lottoRank.calculateLottoResult(this.#lottos, winNumbers, bonus);

    const lottoResult = this.#lottoRank.lottoResult;

    OutputView.printLottoResult(lottoResult);

    const earningRate = this.#lottoRank.totalPrize / amount;

    OutputView.printEarningRate(earningRate);
  }
}

export default LottoController;
