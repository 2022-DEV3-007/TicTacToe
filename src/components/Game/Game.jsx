import './Game.css';
import Board from '../Board/Board';
import { useState } from 'react';

function Game() {
  const [xIsNext, setXIsNext] = useState(true)
  const [board, setBoard] = useState(Array(9).fill(null))

  const handleClick = (pos) => {
    console.log(pos)
    setXIsNext(!xIsNext);
  }

  return (
    <div className='game__container'>
      <h1 className='game__title'>Tic-Tac-Toe Game</h1>
      <Board onClick={handleClick} tiles={board}/>
      <p>It is {xIsNext ? "X" : "O"} turn</p>
    </div>
    
  );
}

export default Game;
