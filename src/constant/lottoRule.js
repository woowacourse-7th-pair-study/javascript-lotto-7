export const LOTTO_LENGTH = 6;

export const LOTTO_PRIZE_INFO = {
  1: { matchCount: 6, isBonusMatch: false, string: "6개 일치", price: 2_000_000_000 },
  2: { matchCount: 5, isBonusMatch: true, string: "5개 일치, 보너스 볼 일치", price: 30_000_000 },
  3: { matchCount: 5, isBonusMatch: false, string: "5개 일치", price: 1_500_000 },
  4: { matchCount: 4, isBonusMatch: false, string: "4개 일치", price: 50_000 },
  5: { matchCount: 3, isBonusMatch: false, string: "3개 일치", price: 5_000 },
};
