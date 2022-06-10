import React, { Component } from "react";
import propTypes from "prop-types";
import Input from "./Input";
import Word from "./Word";
import Timer from "./Timer";
import Rank1 from "./../Rank1/Rank1";

import "./Board.css";
import Settings from "./settings/Settings";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "홍길동씨",
      score: 2050,
      mode: "test",
      word: "소나기",

      settingsValue: {
        gamemode: 0,
        username: "GameUser",
        gametext: "arial",
      },
    };
    this.onChange = this.onChange.bind(this);
    this.CheckAnswer = this.CheckAnswer.bind(this);
    this.TimeOut = this.TimeOut.bind(this);
    this.updateSettingsValue = this.updateSettingsValue.bind(this);
  }

  // 설정 값을 바꿔주는 함수입니다.
  updateSettingsValue(key, value) {
    let modifiedSettings = JSON.parse(JSON.stringify(this.state.settingsValue));
    modifiedSettings[key] = value;
    this.setState({ settingsValue: modifiedSettings });
  }

  onChange(key, value) {
    this.setState({
      [key]: value,
    });
  }
  CheckAnswer(value) {
    if (this.state.word === value) {
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      return false;
    }
  }
  TimeOut() {
    alert("데이터 전송.");
    //var tempnick = prompt("원하는 닉네임을 입력해 주세요");
    let today = new Date();
    const result = [
      {
        username: this.state.name,
        score: this.state.score,
        mode: this.state.mode,
        date: today,
      },
    ];
    Rank1(result);
    // alert(tempnick);
  }
  render() {
    return (
      <div>
        <Settings
          settingsValue={this.props.settingsValue}
          updateSettingsValue={(key, value) =>
            this.updateSettingsValue(key, value)
          }
        />

        <p className="Timer">
          <Timer
            mode={this.state.mode}
            onChange={this.onChange}
            TimeOut={this.TimeOut}
          />
        </p>
        <Word
          id="word"
          score={this.state.score}
          word={this.state.word}
          onChange={this.onChange}
        ></Word>
        <Input
          word={this.state.word}
          onChange={this.onChange}
          onEnter={this.CheckAnswer}
        />
        <div>
          <ul>
            <li className="user_inpo">이름 : {this.state.name}</li>
            <li className="user_inpo">점수 : {this.state.score}</li>
            <li className="user_inpo">난이도: {this.state.mode}</li>
          </ul>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  name: propTypes.string,
  mode: propTypes.string,
  score: propTypes.number,
  word: propTypes.string,
};

export default Game;
