import React, { Component } from "react";
import Game from "./Game/Game";
import Rank from "./Rank1/Rank1";
import Settings from "./settings/Settings";

class App extends Component {
  render() {
    return (
      <div>
        <Game />
        <Rank />
      </div>
    );
  }
}
export default App;
