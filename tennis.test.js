import Tennis from './tennis';
let tennis;
describe('Tennis Game', () => {
  beforeEach(() => {
    tennis = new Tennis('Sing', 'Miki');
  });
  test('love all', () => {
    scoreShouldBe('love all');
  });
  test('fifteen love', () => {
    givenFirstPlayerScore(1);
    scoreShouldBe('fifteen love');
  });
  test('thirty love', () => {
    givenFirstPlayerScore(2);
    scoreShouldBe('thirty love');
  });
  test('forty love', () => {
    givenFirstPlayerScore(3);
    scoreShouldBe('forty love');
  });
  test('love fifteen', () => {
    givenSecondPlayerScore(1);
    scoreShouldBe('love fifteen');
  });
  test('love thirty', () => {
    givenSecondPlayerScore(2);
    scoreShouldBe('love thirty');
  });
  test('fifteen all', () => {
    givenSecondPlayerScore(1);
    givenFirstPlayerScore(1);
    scoreShouldBe('fifteen all');
  });
  test('thirty all', () => {
    givenSecondPlayerScore(2);
    givenFirstPlayerScore(2);
    scoreShouldBe('thirty all');
  });
  test('deuce', () => {
    givenDeuce();
    scoreShouldBe('deuce');
  });
  test('Sing Adv', () => {
    givenDeuce();
    givenFirstPlayerScore(1);
    scoreShouldBe('Sing Adv');
  });
  test('Miki Adv', () => {
    givenDeuce();
    givenSecondPlayerScore(1);
    scoreShouldBe('Miki Adv');
  });
  test('Miki Win', () => {
    givenDeuce();
    givenSecondPlayerScore(2);
    scoreShouldBe('Miki Win');
  });
});
function givenDeuce() {
  givenSecondPlayerScore(3);
  givenFirstPlayerScore(3);
}

function givenSecondPlayerScore(times) {
  for (let i = 0; i < times; i += 1) {
    tennis.secondPlayerScore();
  }
}

function givenFirstPlayerScore(times) {
  for (let i = 0; i < times; i += 1) {
    tennis.firstPlayerScore();
  }
}

function scoreShouldBe(expected) {
  expect(tennis.score()).toBe(expected);
}
