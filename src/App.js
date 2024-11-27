import LottoController from "./Controller/LottoController.js";

class App {
  async run() {
    const lottoController = new LottoController();

    lottoController.playLotto();
  }
}

export default App;
