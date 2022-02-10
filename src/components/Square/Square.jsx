import './Square.css';

function Square({value, onClick, index}) {
  return (
    <button data-testid={`tile-button-${index}`} className='square__button' onClick={onClick}>{value}</button>
  );
}

export default Square;
