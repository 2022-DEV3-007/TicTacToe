import './Game.css';
import Board from '../Board/Board';

function Game() {

  const handleClick = (pos) => {
    console.log(pos)
  }

  return (
    <div className='game__container'>
      <h1 className='game__title'>Tic-Tac-Toe Game</h1>
      <Board onClick={handleClick}/>
    </div>
    
  );
}

export default Game;
