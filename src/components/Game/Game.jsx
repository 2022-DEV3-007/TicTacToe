import './Game.css';
import Board from '../Board/Board';
import { useEffect, useState } from 'react';
import { calculateWinner } from "../../helper"

function Game() {
  const [xIsNext, setXIsNext] = useState(true)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [endGame, setEndGame] = useState(null)
  const win = calculateWinner(board)

  const handleClick = (pos) => {
    const boardCopy = [...board];

    if (boardCopy[pos] || win) return;

    boardCopy[pos] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  useEffect(() => {
    if (win) {
      setEndGame(`winner ${!xIsNext ? "X" : "0"}`)
    }
  }, [win])

  return (
    <div className='game__container'>
      {endGame &&
        <div>
          <p>{endGame}</p>
        </div>
      }

      <h1 className='game__title'>Tic-Tac-Toe Game</h1>
      <Board onClick={handleClick} tiles={board}/>
      <p>It is {xIsNext ? "X" : "O"} turn</p>
    </div>
    
  );
}

export default Game;
