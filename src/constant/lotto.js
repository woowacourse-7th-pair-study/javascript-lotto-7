export const LOTTO_RULE = Object.freeze({
  UNIT: 1_000,
  MAX_AMOUNT: 100_000,
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  LENGTH: 6,

});

export const LOTTO_RANK_INDEX = Object.freeze({
  lose: -1, // 0~2개 당첨
  first: 0, // 6개 당첨
  second: 1, // 5개 + 보너스 당첨
  third: 2, // 5개 당첨
  fourth: 3, // 4개 당첨
  fifth: 4, // 3개 당첨
});

export const LOTTO_RANK_PRIZE = Object.freeze({
  [LOTTO_RANK_INDEX.first]: 2_000_000_000,
  [LOTTO_RANK_INDEX.second]: 30_000_000,
  [LOTTO_RANK_INDEX.third]: 1_500_000,
  [LOTTO_RANK_INDEX.fourth]: 50_000,
  [LOTTO_RANK_INDEX.fifth]: 5_000,
});
