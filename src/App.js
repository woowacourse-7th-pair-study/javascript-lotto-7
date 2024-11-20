import { Console } from "@woowacourse/mission-utils";
import Controller from "./controllers/Controller.js";

class App {
  async run() {
    await new Controller().start();
  }
}

export default App;
