import React from "react";
import { useState } from "react";
import "./index.css";
import useTicTacToe from "../hooks/TicTakToeHook";
export default function TicTacToeLogic() {
    const{board, handleClick, getStatusMessage, resetGame }=useTicTacToe();
  return (
    <div className="game">
      <div className="status">
        <h2>{getStatusMessage()}</h2>
        <button className="restart-btn mb-3" onClick={resetGame}>Reset Game</button>
        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handleClick(index)}
                disabled={b !== null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
