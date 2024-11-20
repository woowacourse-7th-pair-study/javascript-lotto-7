import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readLottoPurchase() {
    try {
      return await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default InputView;
