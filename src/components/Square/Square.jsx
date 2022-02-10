import './Square.css';

function Square({value}) {
  return (
    <button className='square__button'>{value}</button>
  );
}

export default Square;
