import './Board.css';
import Square from "../Square/Square"

function Board({onClick, tiles}) {
  return (
    <div className='board__container'>
      { tiles.map((tile, idx) => (
        <Square key={idx} value={tile} onClick={() => onClick(idx)} index={idx}/>
      ))}
    </div>
  );
}

export default Board;
