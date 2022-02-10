import { render, screen } from '@testing-library/react';
import Game from '../Game';

it('should have the title tic tac toe game', () => {
  render(<Game />);
  const headingElement = screen.getByRole('heading', {name: "Tic-Tac-Toe Game"});
  expect(headingElement).toBeInTheDocument();
});
