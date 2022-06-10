import React from "react";
import "./Rank1.css";

function ShowRank({ results }) {
  return (
    <div className="Rank_info">
      <span>{results.id}</span> {results.username} <span>{results.score}</span>{" "}
      <span>{results.time}</span>
    </div>
  );
}

function AllRank({ result }) {
  return (
    <div className="RankBox">
      <div>
        <h1>전체 랭킹</h1>
        {result.map((results) => (
          <ShowRank results={results} key={results.id} />
        ))}
      </div>
    </div>
  );
}

export default AllRank;
