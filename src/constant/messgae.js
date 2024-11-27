import { LOTTO_LENGTH, LOTTO_NUMBER_RANGE, LOTTO_PRICE } from './lottoRule.js';

export const ERROR_MESSAGE = {
  INVALID_LOTTO_LENGTH: `[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`,
  NO_DUPLICATE_NUMBER:
    '[ERROR] 로또 번호는 중복될 수 없습니다. 다시 입력해주세요.',
  NOT_NUMBER: '[ERROR] 숫자가 아닙니다. 다시 입력해주세요.',
  NOT_INTEGER: '[ERROR] 정수가 아닙니다. 다시 입력해주세요.',
  NOT_IN_RANGE: `[ERROR] 로또 번호는 ${LOTTO_NUMBER_RANGE.min}~${LOTTO_NUMBER_RANGE.max} 범위 내로만 입력 가능합니다. 다시 입력해주세요.`,
  UNDER_LOTTO_PRICE: `[ERROR] ${LOTTO_PRICE.toLocaleString()}원 이상 입력 가능합니다. 다시 입력해주세요.`,
  NOT_DIVIDED: `[ERROR] ${LOTTO_PRICE.toLocaleString()}원 단위로 다시 입력해주세요.`,
};
