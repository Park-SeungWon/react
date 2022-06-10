//import logo from './logo.svg';
import React from "react";
import AllRank from "./AllRank";

function Rank1(data) {
  const result = [
    {
      id: 1,
      username: "hun",
      score: 100,
    },
    {
      id: 2,
      username: "huns",
      score: 300,
    },
    {
      id: 3,
      username: "hunei",
      score: 50,
    },
  ];
  result.concat(data);

  result.sort((a, b) => {
    return b.score - a.score;
  });

  return <AllRank result={result} />;
}

export default Rank1;
