import './Board.css';
import Square from "../Square/Square"

function Board({onClick}) {
  return (
    <div className='board__container'>
      <Square value={1} onClick={() => onClick(1)}/>
      <Square value={2} onClick={() => onClick(2)}/>
      <Square value={3} onClick={() => onClick(3)}/>
      <Square value={4} onClick={() => onClick(4)}/>
      <Square value={5} onClick={() => onClick(5)}/>
      <Square value={6} onClick={() => onClick(6)}/>
      <Square value={7} onClick={() => onClick(7)}/>
      <Square value={8} onClick={() => onClick(8)}/>
      <Square value={9} onClick={() => onClick(9)}/>
    </div>
  );
}

export default Board;
