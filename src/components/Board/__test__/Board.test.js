import { render, screen } from '@testing-library/react';
import Board from '../Board';

it('should have the title board', () => {
  render(<Board tiles={Array(9).fill(null)}/>);
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements.length).toBe(9);
});
