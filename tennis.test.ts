import TennisGame from './TennisGame';

describe('TennisGame', () => {

  let tennisGame: TennisGame
  beforeEach(() => {
    tennisGame = new TennisGame("Joey", "Tom");
  });
  test('0 0 Love All', () => {
    ScoreShouldBe("Love All");

  });

  test('1 0 Fifteen Love', () => {
    GivenFirstPlayerScore(1);
    ScoreShouldBe("Fifteen Love");
  });

  test('2 0 Thirty Love', () => {
    GivenFirstPlayerScore(2);
    ScoreShouldBe("Thirty Love");
  });

  test('3 0 Forty Love', () => {
    GivenFirstPlayerScore(3);
    ScoreShouldBe("Forty Love");
  });
  test('0 1 Love Fifteen', () => {
    GivenSecondPlayerScore(1)
    ScoreShouldBe("Love Fifteen");
  });
  test('0 2 Love Thirty', () => {
    GivenSecondPlayerScore(2)
    ScoreShouldBe("Love Thirty");
  });
  test('1 1 Fifteen All', () => {
    GivenFirstPlayerScore(1)
    GivenSecondPlayerScore(1)
    ScoreShouldBe("Fifteen All");
  });
  test('2 2 Thirty All', () => {
    GivenFirstPlayerScore(2)
    GivenSecondPlayerScore(2)
    ScoreShouldBe("Thirty All");
  });
  test('3 3 Deuce', () => {
    GivenFirstPlayerScore(3)
    GivenSecondPlayerScore(3)
    ScoreShouldBe("Deuce");
  });
  test('4 3 Joey Adv', () => {
    GivenFirstPlayerScore(4)
    GivenSecondPlayerScore(3)
    ScoreShouldBe("Joey Adv");
  });
  test('3 4 Tom Adv', () => {
    GivenFirstPlayerScore(3)
    GivenSecondPlayerScore(4)
    ScoreShouldBe("Tom Adv");
  });
  test('4 4 Deuce', () => {
    GivenFirstPlayerScore(4)
    GivenSecondPlayerScore(4)
    ScoreShouldBe("Deuce");
  });
  test('5 3 Joey win', () => {
    GivenFirstPlayerScore(5)
    GivenSecondPlayerScore(3)
    ScoreShouldBe("Joey win");
  });
  test('3 5 Tom win', () => {
    GivenFirstPlayerScore(3)
    GivenSecondPlayerScore(5)
    ScoreShouldBe("Tom win");
  });
  function ScoreShouldBe(score: string) {
    expect(tennisGame.score()).toBe(score);
  }

  function GivenFirstPlayerScore(times: number) {
    for (let index = 0; index < times; index++) {
      tennisGame.firstPlayerScore();
    }
  }
  function GivenSecondPlayerScore(times: number) {
    for (let index = 0; index < times; index++) {
      tennisGame.secondPlayerScore();
    }
  }
});


