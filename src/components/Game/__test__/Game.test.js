import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
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
  render(<Game />);
  const buttonElement = screen.getByTestId("tile-button-1");
  userEvent.click(buttonElement);
  const textElement = screen.getByText(/It is O turn/i)
  expect(textElement).toBeInTheDocument();
});

it('should update button to X after X clicked', () => {
  render(<Game />);
  const buttonElement = screen.getByTestId("tile-button-1");
  userEvent.click(buttonElement);
  expect(buttonElement.textContent).toBe("X");
});

it('should not update button to O where X allready clicked', () => {
  render(<Game />);
  const buttonElement = screen.getByTestId("tile-button-1");
  userEvent.click(buttonElement);
  userEvent.click(buttonElement);
  expect(buttonElement.textContent).toBe("X");
});

it('should end if X wins', () => {
  render(<Game />);
  const buttonElements = screen.getAllByTestId(/tile-button/i);

  userEvent.click(buttonElements[0]);
  userEvent.click(buttonElements[3]);
  userEvent.click(buttonElements[1]);
  userEvent.click(buttonElements[4]);
  userEvent.click(buttonElements[2]);
  const textElement = screen.getByText(/winner/i)
  expect(textElement).toBeInTheDocument();
});

it('should end if O wins', () => {
  render(<Game />);
  const buttonElements = screen.getAllByTestId(/tile-button/i);

  userEvent.click(buttonElements[0]);
  userEvent.click(buttonElements[3]);
  userEvent.click(buttonElements[1]);
  userEvent.click(buttonElements[4]);
  userEvent.click(buttonElements[6]);
  userEvent.click(buttonElements[5]);
  const textElement = screen.getByText(/winner/i)
  expect(textElement).toBeInTheDocument();
});

it('should end if board is full with no win', () => {
  render(<Game />);
  const buttonElements = screen.getAllByTestId(/tile-button/i);

  userEvent.click(buttonElements[0]);
  userEvent.click(buttonElements[1]);
  userEvent.click(buttonElements[4]);
  userEvent.click(buttonElements[2]);
  userEvent.click(buttonElements[5]);
  userEvent.click(buttonElements[3]);
  userEvent.click(buttonElements[6]);
  userEvent.click(buttonElements[8]);
  userEvent.click(buttonElements[7]);
  const textElement = screen.getByText(/draw/i)
  expect(textElement).toBeInTheDocument();
});

it('should reset if u press play again', () => {
  render(<Game />);
  const buttonElements = screen.getAllByTestId(/tile-button/i);

  userEvent.click(buttonElements[0]);
  userEvent.click(buttonElements[3]);
  userEvent.click(buttonElements[1]);
  userEvent.click(buttonElements[4]);
  userEvent.click(buttonElements[2]);
  const buttonElement = screen.getByRole("button", {name: "Play again"})
  expect(buttonElement).toBeInTheDocument();
});

/* board
  "0", "1", "2"
  "3", "4", "5"
  "6", "7", "8" 
*/