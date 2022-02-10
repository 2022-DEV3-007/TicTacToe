import './Square.css';

function Square({value, onClick}) {
  return (
    <button className='square__button' onClick={onClick}>{value}</button>
  );
}

export default Square;
