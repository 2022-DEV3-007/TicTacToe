import { render, screen } from '@testing-library/react';
import Board from '../Board';

it('should have the title board', () => {
  render(<Board />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement.textContent).toBe("board");
});
