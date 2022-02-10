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

it('should end if a player wins', () => {
  render(<Game />);
  const button1Element = screen.getByTestId("tile-button-0");
  const button2Element = screen.getByTestId("tile-button-3");
  const button3Element = screen.getByTestId("tile-button-1");
  const button4Element = screen.getByTestId("tile-button-4");
  const button5Element = screen.getByTestId("tile-button-2");
  userEvent.click(button1Element);
  userEvent.click(button2Element);
  userEvent.click(button3Element);
  userEvent.click(button4Element);
  userEvent.click(button5Element);
  const textElement = screen.getByText(/winner/i)
  expect(textElement).toBeInTheDocument();
});

it('should end if board is full with no win', () => {
  render(<Game />);
  const button1Element = screen.getByTestId("tile-button-0");
  const button2Element = screen.getByTestId("tile-button-1");
  const button3Element = screen.getByTestId("tile-button-4");
  const button4Element = screen.getByTestId("tile-button-2");
  const button5Element = screen.getByTestId("tile-button-5");
  const button6Element = screen.getByTestId("tile-button-3");
  const button7Element = screen.getByTestId("tile-button-7");
  const button8Element = screen.getByTestId("tile-button-8");
  const button9Element = screen.getByTestId("tile-button-6");
  userEvent.click(button1Element);
  userEvent.click(button2Element);
  userEvent.click(button3Element);
  userEvent.click(button4Element);
  userEvent.click(button5Element);
  userEvent.click(button6Element);
  userEvent.click(button7Element);
  userEvent.click(button8Element);
  userEvent.click(button9Element);
  const textElement = screen.getByText(/draw/i)
  expect(textElement).toBeInTheDocument();
});

it('should reset if u press play again', () => {
  throw new Error();
});

/* board
  "0", "1", "2"
  "3", "4", "5"
  "6", "7", "8" 
*/