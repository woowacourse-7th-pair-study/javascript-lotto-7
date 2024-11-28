import LottoStatistics from '../src/model/LottoStatistics.js';

describe('LottoStatistics 클래스 테스트', () => {
  describe('addRankCount()를 통해 statistics를 업데이트 하고 getLottoStatistics()를 통해 반환한다.', () => {
    let lottoStatistics;

    beforeAll(() => {
      lottoStatistics = new LottoStatistics();
    });

    test.each([
      // given
      ['1등 당첨', { rankIndex: 0, expectedStatistics: [ 1, 0, 0, 0, 0 ] }],
      ['2등 당첨', { rankIndex: 1, expectedStatistics: [ 1, 1, 0, 0, 0 ] }],
      ['3등 당첨', { rankIndex: 2, expectedStatistics: [ 1, 1, 1, 0, 0 ] }],
      ['4등 당첨', { rankIndex: 3, expectedStatistics: [ 1, 1, 1, 1, 0 ] }],
      ['5등 당첨', { rankIndex: 4, expectedStatistics: [ 1, 1, 1, 1, 1 ] }],
      ['미당첨', { rankIndex: -1, expectedStatistics: [ 1, 1, 1, 1, 1 ] }],
    ])('%s', (_, { rankIndex, expectedStatistics }) => {
      // when
      lottoStatistics.addRankCount(rankIndex);
      const statistics = lottoStatistics.getLottoStatistics();

      // then 
      expect(statistics).toEqual(expectedStatistics);
    });
  });
});
