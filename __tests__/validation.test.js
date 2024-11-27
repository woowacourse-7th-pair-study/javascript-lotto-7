import {
  validateAmount,
  validateBonusNumber,
  validateWinningNumbers,
} from '../src/util/validation';
import parser from '../src/util/parser.js';

describe('validationTest', () => {
  describe('금액', () => {
    test.each([
      [
        '숫자가 아닌 경우',
        'aaa',
        '[ERROR] 숫자가 아닙니다. 다시 입력해 주세요.',
      ],
      [
        '정수가 아닌 경우',
        '1000.1',
        '[ERROR] 정수가 아닙니다. 다시 입력해 주세요.',
      ],
      [
        '1_000원 미만인 경우',
        '900',
        '[ERROR] 로또 구입 금액은 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해 주세요.',
      ],
      [
        '100_000원 초과인 경우',
        '100001',
        '[ERROR] 로또 구입 금액은 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해 주세요.',
      ],
      [
        '1_000원 단위가 아닌 경우',
        '1100',
        '[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다. 다시 입력해 주세요.',
      ],
    ])('%s 에러가 발생한다.', (_, input, errMessage) => {
      const parsedInput = parser.stringToNumber(input);
      expect(() => validateAmount(parsedInput)).toThrow(errMessage);
    });
  });

  describe('당첨 번호', () => {
    test.each([
      [
        '숫자가 아닌 경우',
        'a,1,2,3,4,5',
        '[ERROR] 숫자가 아닙니다. 다시 입력해 주세요.',
      ],
      [
        '정수가 아닌 경우',
        '1.1,2,3,4,5,6',
        '[ERROR] 정수가 아닙니다. 다시 입력해 주세요.',
      ],
      [
        '당첨 번호 개수가 6개가 아닌 경우',
        '1,2,3,4,5,6,7',
        '[ERROR] 로또 번호는 6개여야 합니다.',
      ],
      [
        '당첨 번호에 중복된 값이 있는 경우',
        '1,1,2,3,4,5',
        '[ERROR] 로또 번호는 중복될 수 없습니다. 다시 입력해 주세요.',
      ],
      [
        '범위가 1 이상 45 이하가 아닌 경우',
        '1,2,3,4,5,46',
        '[ERROR] 로또 번호는 1 이상 45 이하여야 합니다. 다시 입력해 주세요.',
      ],
    ])('%s 에러가 발생한다.', (_, input, errMessage) => {
      const parsedInput = parser.stringToArray(input);
      expect(() => validateWinningNumbers(parsedInput)).toThrow(errMessage);
    });
  });

  describe('보너스 번호', () => {
    test.each([
      [
        '숫자가 아닌 경우',
        'a',
        '[ERROR] 숫자가 아닙니다. 다시 입력해 주세요.',
      ],
      [
        '정수가 아닌 경우',
        '1.1',
        '[ERROR] 정수가 아닙니다. 다시 입력해 주세요.',
      ],
      [
        '범위가 1 이상 45 이하가 아닌 경우',
        '46',
        '[ERROR] 로또 번호는 1 이상 45 이하여야 합니다. 다시 입력해 주세요.',
      ],
      [
        '당첨 번호에 중복된 값이 있는 경우',
        '1',
        '[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다. 다시 입력해 주세요.',
      ],
    ])('%s 에러가 발생한다.', (_, input, errMessage) => {
      const winningNumbers = [ 1, 2, 3, 4, 5, 6 ];
      const parsedInput = parser.stringToNumber(input);
      expect(() => validateBonusNumber(parsedInput, winningNumbers)).toThrow(errMessage);
    });
  });
});
