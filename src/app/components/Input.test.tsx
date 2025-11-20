import { render, screen } from "@testing-library/react"
import Input from "./Input"
import userEvent from "@testing-library/user-event"

describe('Input Component', () => {
    test('renders the label and input correctly', () => {
        render(<Input label="Link" classNameLabel={""} labelFor={"link"}/>)

        expect(screen.getByText("Link")).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    })

    test('accepts placeholder and class props', () => {
        render(<Input placeholder="Link here" label={"Link"} classNameLabel={"my-class"} labelFor={"link"} />)

        expect(screen.getByPlaceholderText("Link here")).toBeInTheDocument();
        expect(screen.getByText("Link").parentElement).toHaveClass("my-class")
    })

    test('label is associated with input', () => {
        render(<Input label={"Email"} classNameLabel={""} labelFor={"email"} id={"email"} />)

        const label = screen.getByText("Email")
        const input = screen.getByRole("textbox")

        expect(label).toHaveAttribute("for", "email")
        expect(input).toHaveAttribute("id", "email")
    })

    test('generates id from label when id is not provided', () => {
        render(<Input label={"Enter your link"} classNameLabel={""} labelFor={"enter-your-link"} />)

        const input = screen.getByRole("textbox");
        expect(input).toHaveAttribute("id", "enter-your-link")
    })

    test('renders with required state', () => {
        render(<Input label={"Link"} classNameLabel={""} labelFor={"link"} required />)

        expect(screen.getByRole("textbox")).toBeRequired()
    })

    test('calls onChange when typing', async () => {
        const handleChange = jest.fn()
        const user = userEvent.setup()

        render(<Input label={"Name"} classNameLabel={""} labelFor={"name"} onChange={handleChange}/>);

        const input = screen.getByRole("textbox")
        await user.type(input, "ABC")

        expect(handleChange).toHaveBeenCalledTimes(3)     
    })


})