import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title component", () => {
  
  test("renders the title text", () => {
    render(<Title title="My Title" classNameSection={""} className={""} />);
    
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("My Title");
  });

  test("applies className to the h1", () => {
    render(<Title title="Test" className="my-title-class" classNameSection={""} />);
    
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("my-title-class");
  });

  test("renders an h1 inside a section", () => {
    const { container } = render(<Title title="Estrutura" classNameSection={""} className={""} />);

    const section = container.querySelector("section");
    const heading = container.querySelector("h1");

    expect(section).not.toBeNull();
    expect(heading).not.toBeNull();
  });

  test("renders dynamic title content", () => {
    render(<Title title="Dinamic Title 123" classNameSection={""} className={""} />);
    expect(screen.getByText(/dinamic title 123/i)).toBeInTheDocument();
  });

});