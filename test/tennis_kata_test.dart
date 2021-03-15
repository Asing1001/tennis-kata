import 'package:flutter_test/flutter_test.dart';
import 'package:tennis_kata/tennis_kata.dart';

var tennis = Tennis('Sing', 'Miki');

main() {
  setUp(() {
    tennis = Tennis('Sing', 'Miki');
  });
  group('Tennis Kata', () {
    test('love all', () {
      scoreShouldBe('love all');
    });
    test('fifteen love', () {
      givenFirstPlayerScore(1);
      scoreShouldBe('fifteen love');
    });
    test('thirty love', () {
      givenFirstPlayerScore(2);
      scoreShouldBe('thirty love');
    });
    test('forty love', () {
      givenFirstPlayerScore(3);
      scoreShouldBe('forty love');
    });
    test('love fifteen', () {
      givenSecondPlayerScore(1);
      scoreShouldBe('love fifteen');
    });
    test('love thirty', () {
      givenSecondPlayerScore(2);
      scoreShouldBe('love thirty');
    });
    test('love forty', () {
      givenSecondPlayerScore(3);
      scoreShouldBe('love forty');
    });
    test('fifteen all', () {
      givenSecondPlayerScore(1);
      givenFirstPlayerScore(1);
      scoreShouldBe('fifteen all');
    });
    test('thirty all', () {
      givenSecondPlayerScore(2);
      givenFirstPlayerScore(2);
      scoreShouldBe('thirty all');
    });
    test('deuce', () {
      givenDeuce();
      scoreShouldBe('deuce');
    });
    test('Sing Adv', () {
      givenDeuce();
      givenFirstPlayerScore(1);
      scoreShouldBe('Sing Adv');
    });
    test('Miki Adv', () {
      givenDeuce();
      givenSecondPlayerScore(1);
      scoreShouldBe('Miki Adv');
    });
    test('Miki Win', () {
      givenDeuce();
      givenSecondPlayerScore(2);
      scoreShouldBe('Miki Win');
    });
  });
}

void givenDeuce() {
  givenSecondPlayerScore(3);
  givenFirstPlayerScore(3);
}

void givenSecondPlayerScore(int times) {
  for (var index = 0; index < times; index++) {
    tennis.secondPlayerScore();
  }
}

void givenFirstPlayerScore(int times) {
  for (var index = 0; index < times; index++) {
    tennis.firstPlayerScore();
  }
}

void scoreShouldBe(String expected) {
  expect(tennis.score(), expected);
}
