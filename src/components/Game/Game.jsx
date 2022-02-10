import './Game.css';
import Board from '../Board/Board';
import { useState } from 'react';

function Game() {
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (pos) => {
    console.log(pos)
  }

  return (
    <div className='game__container'>
      <h1 className='game__title'>Tic-Tac-Toe Game</h1>
      <Board onClick={handleClick}/>
      <p>It is {xIsNext ? "X" : "O"} turn</p>
    </div>
    
  );
}

export default Game;
