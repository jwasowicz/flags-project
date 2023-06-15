import { useEffect, useState } from "react";

const FlagStats = ({
  rounds,
  streak,
  counter,
  endScreen,
  isWin,
  winRate,
  attempts,
  setAttempts,
  highWinStreak,
  setHighWinStreak,
}) => {
  useEffect(() => {
    if (endScreen && isWin) {
      setAttempts((prevAttempt) => [...prevAttempt, counter / 6]);
      setHighWinStreak((prevStreak) => [...prevStreak, streak]);
    }
  }, [counter, endScreen, isWin, streak, setAttempts, setHighWinStreak]);

  return (
    <div className="stats-container">
      <h2 className="stats-header">Statistics</h2>

      <div className="sub-container">
        <div className="stats-element">
          <div className="title">Current Streak</div>
          <div className="value">{streak / 6}</div>
        </div>
        <div className="stats-element">
          <div className="title">Win Rate</div>
          <div className="value">
            {winRate ? `${((winRate / rounds) * 100).toFixed(0)}%` : "- "}
          </div>
        </div>
        <div className="stats-element">
          <div className="title">Highest Streak</div>
          <div className="value">
            {highWinStreak.length ? Math.max(...highWinStreak) / 6 : 0}
          </div>
        </div>
        <div className="stats-element">
          <div className="title">Average Attempts</div>
          <div className="value">
            {attempts.length
              ? (
                  attempts.reduce((prev, curr) => prev + curr) / attempts.length
                ).toFixed(2)
              : 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagStats;
