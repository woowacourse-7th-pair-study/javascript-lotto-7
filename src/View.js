import { Console } from "@woowacourse/mission-utils";

const View = {
  async inputPurchaseAmount() {
    return await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  },
};
export default View;
