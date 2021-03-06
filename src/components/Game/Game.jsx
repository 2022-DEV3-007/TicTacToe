import './Game.css';
import Board from '../Board/Board';
import { useEffect, useState } from 'react';
import { calculateWinner, calculateDraw } from "../../helper"

function Game() {
  //which player is it
  const [xIsNext, setXIsNext] = useState(true)

  //fill board with empty tiles
  const [board, setBoard] = useState(Array(9).fill(null))
  const [endGame, setEndGame] = useState(null)
  const win = calculateWinner(board)
  const draw = calculateDraw(board)

  //handles the clicks of the tiles
  const handleClick = (pos) => {
    const boardCopy = [...board];

    if (boardCopy[pos] || win || draw) return;

    boardCopy[pos] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  //handle reset
  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setEndGame(null);
    setXIsNext(true)
  }

  //display winner or draw
  useEffect(() => {
    if (win) {
      setEndGame(`winner ${!xIsNext ? "X" : "0"}`)
    }

    if (draw && !win) {
      setEndGame("draw")
    }
  }, [win, draw])

  return (
    <div className='game__container'>
      {endGame &&
        <div className='game__endscreen'>
          <div className='endscreen__content'>
            <p className='endscreen__result'>{endGame}</p>
            <button className='endscreen__button' onClick={() => handleReset()}>Play again</button>
          </div>
        </div>
      }

      <h1 className='game__title'>Tic-Tac-Toe Game</h1>
      <Board onClick={handleClick} tiles={board}/>
      <p className='game__turn'>It is {xIsNext ? "X" : "O"} turn</p>
    </div>
    
  );
}

export default Game;
