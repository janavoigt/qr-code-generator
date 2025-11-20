import { render, screen } from "@testing-library/react";
import Select from "./Select";
import userEvent from "@testing-library/user-event";

const mockOptions = [
  { value: "1", label: "Option A" },
  { value: "2", label: "Option B" },
  { value: "3", label: "Option C" },
];

describe('Select component', () => {
    test('renders label and select correctly', () => {
        render(<Select label={"Select"} options={mockOptions} />)

        expect(screen.getByText("Select")).toBeInTheDocument();
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    })

    test("generates id automatically when not provided", () => {
        render(<Select label={"Select"} labelFor="select" options={mockOptions}/>)

        expect(screen.getByRole("combobox")).toHaveAttribute("id", "select")
    })
    test('associates label with select via htmlFor and id', () => {
        render(<Select label={"Category"} id="category-id" labelFor="category-id" options={mockOptions} />)

        const label = screen.getByText("Category")
        const select = screen.getByRole("combobox")

        expect(label).toHaveAttribute("for", "category-id")
        expect(select).toHaveAttribute("id", "category-id")
    })

    test("renders all options correctly", () => {
        render(<Select label={"List Items"} labelFor="list-items" options={mockOptions} />)

        mockOptions.forEach(opt => {
            expect(screen.getByRole("option", { name: opt.label })).toBeInTheDocument();
        })
    })
    test('calls onChange when a new option is selected', async () => {
        const handleChange = jest.fn()
        const user = userEvent.setup()

        render(<Select label={"Choose"} labelFor="choose" options={mockOptions} onChange={handleChange} />)

        const select = screen.getByRole("combobox")
        await user.selectOptions(select, "2")

        expect(handleChange).toHaveBeenCalledTimes(1)
        expect((select as HTMLSelectElement).value).toBe("2")
    })
})