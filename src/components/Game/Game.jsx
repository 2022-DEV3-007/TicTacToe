import './Game.css';
import Board from '../Board/Board';

function Game() {
  return (
    <div className='game__container'>
      <h1 className='game__title'>Tic-Tac-Toe Game</h1>
      <Board />
    </div>
    
  );
}

export default Game;
