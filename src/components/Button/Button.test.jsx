import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
	it('renders a default button with text', async () => {
		render(<Button>Click me</Button>);

		expect(screen.getByText('Click me')).toBeInTheDocument();
	});

	it('handles onClick', () => {
		const mockOnClick = jest.fn();

		render(<Button onClick={mockOnClick}>Click me</Button>);
		userEvent.click(screen.getByText('Click me'));

		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
