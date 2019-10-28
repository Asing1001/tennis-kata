export default class TennisGame {
  _firstPlayerName: String
  _secondPlayerName: String
  constructor(firstPlayerName: String, secondPlayerName: string) {
    this._firstPlayerName = firstPlayerName
    this._secondPlayerName = secondPlayerName

  }
  _secondPlayerScoreTimes: number = 0
  secondPlayerScore() {
    this._secondPlayerScoreTimes++
  }
  _firstPlayerScoreTimes: number = 0
  firstPlayerScore() {
    this._firstPlayerScoreTimes++
  }
  score() {
    const lookup: { [key: number]: string } = {
      0: 'Love',
      1: 'Fifteen',
      2: 'Thirty',
      3: 'Forty',
    }

    if (this.scoreNotEqual()) {
      if (this.isMatchPoint()) {
        const advancePlayer = this._firstPlayerScoreTimes > this._secondPlayerScoreTimes ? this._firstPlayerName : this._secondPlayerName
        if (this.playerWin()) {
          return `${advancePlayer} win`
        }
        return `${advancePlayer} Adv`
      }
      return `${lookup[this._firstPlayerScoreTimes]} ${lookup[this._secondPlayerScoreTimes]}`;
    }
    if (this.isDeuce()) {
      return 'Deuce'
    }
    return `${lookup[this._firstPlayerScoreTimes]} All`
  }


  private isDeuce() {
    return this._firstPlayerScoreTimes >= 3;
  }

  private playerWin() {
    return Math.abs(this._firstPlayerScoreTimes - this._secondPlayerScoreTimes) === 2;
  }

  private isMatchPoint() {
    return this._firstPlayerScoreTimes >= 3 && this._secondPlayerScoreTimes >= 3;
  }

  private scoreNotEqual() {
    return this._firstPlayerScoreTimes !== this._secondPlayerScoreTimes;
  }
};
