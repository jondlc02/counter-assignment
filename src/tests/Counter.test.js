// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counter_message = screen.getByText(/Counter/i);
  expect(counter_message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  const count = screen.getByTestId('count');

  fireEvent.click(incrementButton);

  expect(count.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  const count = screen.getByTestId('count');

  fireEvent.click(decrementButton);

  expect(count.textContent).toBe('-1');
});
