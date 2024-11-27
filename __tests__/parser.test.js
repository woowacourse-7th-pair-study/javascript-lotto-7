import parser from '../src/util/parser.js';

describe('parserTest', () => {
  describe('stringToNumber 메서드 테스트', () => {
    test('문자열을 숫자로 반환한다.', () => {
      // given
      const string = '1000';

      // when
      const number = parser.stringToNumber(string);
      
      // then
      expect(number).toBe(1000);
    });
  });

  describe('stringToArray 메서드 테스트', () => {
    test('문자열을 숫자 배열로 반환한다.', () => {
      // given
      const string = '1,2,3,4,5,6';

      // when
      const numArray = parser.stringToArray(string);
      
      // then
      expect(numArray).toEqual([ 1, 2, 3, 4, 5, 6 ]);
    });
  });
});
