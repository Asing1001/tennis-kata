library tennis_kata;

class Tennis {
  var firstPlayerScoreTimes = 0;
  var scoreLookup = {
    0: 'love',
    1: 'fifteen',
    2: 'thirty',
    3: 'forty',
  };

  var secondPlayerScoreTimes = 0;

  String _firstPlayerName;

  String _secondPlayerName;

  Tennis(String firstPlayerName, String secondPlayerName) {
    _firstPlayerName = firstPlayerName;
    _secondPlayerName = secondPlayerName;
  }

  score() {
    if (scoreIsDifference()) {
      if (isReadyForGamePoint()) {
        return advState();
      }
      return lookupScore();
    }
    if (isDeuce()) {
      return deuce();
    }
    return sameScore();
  }

  bool isDeuce() => firstPlayerScoreTimes >= 3;

  String advState() {
    if (isAdv()) {
      return advScore();
    }
    return winScore();
  }

  bool isReadyForGamePoint() =>
      firstPlayerScoreTimes > 3 || secondPlayerScoreTimes > 3;

  bool isAdv() => (firstPlayerScoreTimes - secondPlayerScoreTimes).abs() == 1;

  String advScore() {
    return advPlayer() + ' Adv';
  }

  String winScore() {
    return advPlayer() + ' Win';
  }

  String advPlayer() {
    var firstPlayerName = firstPlayerScoreTimes > secondPlayerScoreTimes
        ? _firstPlayerName
        : _secondPlayerName;
    return firstPlayerName;
  }

  bool scoreIsDifference() => secondPlayerScoreTimes != firstPlayerScoreTimes;

  String lookupScore() {
    return '${scoreLookup[firstPlayerScoreTimes]} ${scoreLookup[secondPlayerScoreTimes]}';
  }

  String sameScore() {
    return '${scoreLookup[firstPlayerScoreTimes]} all';
  }

  String deuce() {
    return 'deuce';
  }

  void firstPlayerScore() {
    firstPlayerScoreTimes++;
  }

  void secondPlayerScore() {
    secondPlayerScoreTimes++;
  }
}
