import { render, screen } from '@testing-library/react';
import Game from '../Game';

it('should have the title tic tac toe game', () => {
  render(<Game />);
  const headingElement = screen.getByRole('heading', {name: "Tic-Tac-Toe Game"});
  expect(headingElement).toBeInTheDocument();
});

it('should be X turn at the start of the game', () => {
  render(<Game />);
  const textElement = screen.getByText(/It is X turn/i);
  expect(textElement).toBeInTheDocument();
});

it('should change to O turn after X clicked', () => {
  throw new Error();
});

it('should update button to X after X clicked', () => {
  throw new Error();
});

it('should not update button to O where X allready clicked', () => {
  throw new Error();
});

it('should end if a player wins', () => {
  throw new Error();
});

it('should end if board is full with no win', () => {
  throw new Error();
});

it('should reset if u press play again', () => {
  throw new Error();
});