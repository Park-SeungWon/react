//import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import {
  Link,
  Route,
  /*Switch*/ BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import Game from "./Game/Game";
import Rank1 from "./Rank1/Rank1";
import DifficultyRank from "./Rank2/DifficultyRank";
import Settings from "./Settings/Settings";

function App() {
  const [settingsValue, setSettingsValue] = useState();
 
  const onChange = (key, value) => {
    setSettingsValue({
      name: "GameUser1",
      mode: "test",
      gametext: "arial",
    });
  };

  return (
    <Router>
      <header>
        <Link to="/">
          <button>홈</button>
        </Link>
        <Link to="/game">
          <button>게임</button>
        </Link>
        <Link to="/allRank">
          <button>전체랭킹</button>
        </Link>
        <Link to="/diffcultyRank">
          <button>난이도별랭킹</button>
        </Link>
        <Link to="/option">
          <button>환경설정</button>
        </Link>
      </header>
      <hr />

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/allRank" component={Rank1} />
        <Route path="/diffcultyRank" component={DifficultyRank} />
        <Route
          path="/option"
          element={<Settings  settingsValue={settingsValue} />}
        />
      </main>
    </Router>
  );
}

export default App;
