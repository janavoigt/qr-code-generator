import Button from "./Button";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

describe('Button component', () => {
test('Call onClick if was clicked', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>)

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    await user.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)

})

test('renders the props correctly', () => {
    render(<Button>Download</Button>)

    const buttonProps = screen.getByText("Download")
    expect(buttonProps).toBeInTheDocument();
})
})