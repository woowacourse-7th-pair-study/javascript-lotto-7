export const LOTTO_RANK_INFO = {
  1: {
    matchCount: 6,
    prize: 2000000000,
    matchBonus: false,
  },
  2: {
    matchCount: 5,
    prize: 30000000,
    matchBonus: true,
  },
  3: {
    matchCount: 5,
    prize: 1500000,
    matchBonus: false,
  },
  4: {
    matchCount: 4,
    prize: 50000,
    matchBonus: false,
  },
  5: {
    matchCount: 3,
    prize: 5000,
    matchBonus: false,
  },
};

export const SERVICE_CONSTANTS = Object.freeze({
  initial_amount: 1000,
});

export const LOTTO_BOUNDARY = Object.freeze({
  min: 1,
  max: 45,
  length: 6,
});

export const MESSAGE = Object.freeze({
  amount: "구입금액을 입력해 주세요.\n",
  winnig_number: "\n당첨 번호를 입력해 주세요.\n",
  bonus: "보너스 번호를 입력해 주세요.\n",
  quantity: (count) => `\n${count}개를 구매했습니다.`,
  result_header: "\n당첨 통계",
  bars: "---------",
  win_second: (matchCount, prize, resultCount) =>
    `${matchCount}개 일치, 보너스 볼 일치 (${prize}원) - ${resultCount}개`,
  win_else: (matchCount, prize, resultCount) =>
    `${matchCount}개 일치 (${prize}원) - ${resultCount}개`,
  earning_rate: (rate) => `총 수익률은 ${rate}%입니다.`,
});
