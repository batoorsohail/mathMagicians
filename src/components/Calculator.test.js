import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Calculator from "./Calculator";
it("renders correctly", () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
describe("User interactions", () => {
  test("if the correct special key is passed for clearing data", () => {
    render(<Calculator />);
    let buttonElement;
    act(() => {
      buttonElement = screen.getByText("AC");
      userEvent.click(buttonElement);
    });
    const outputElement = buttonElement;
    expect(outputElement.textContent).toBe("AC");
  });
  test("if the right special key is passed for equality", () => {
    render(<Calculator />);
    let buttonElement;
    act(() => {
      buttonElement = screen.getByText("=");
      userEvent.click(buttonElement);
    });
    const outputElement = buttonElement;
    expect(outputElement.textContent).toBe("=");
  });
  test("if the right special key is passed for sign change", () => {
    render(<Calculator />);
    let buttonElement;
    act(() => {
      buttonElement = screen.getByText("+/-");
      userEvent.click(buttonElement);
    });
    const outputElement = buttonElement;
    expect(outputElement.textContent).toBe("+/-");
  });
  test("if the right operation is passed for addition", () => {
    render(<Calculator />);
    let buttonElement;
    act(() => {
      buttonElement = screen.getByText("+");
      userEvent.click(buttonElement);
    });
    const outputElement = buttonElement;
    expect(outputElement.textContent).toBe("+");
  });
  test("if the right operation is passed for subtraction", () => {
    render(<Calculator />);
    let buttonElement;
    act(() => {
      buttonElement = screen.getByText("-");
      userEvent.click(buttonElement);
    });
    const outputElement = buttonElement;
    expect(outputElement.textContent).toBe("-");
  });
  test("if the right operation is passed for multiplication", () => {
    render(<Calculator />);
    let buttonElement;
    act(() => {
      buttonElement = screen.getByText("x");
      userEvent.click(buttonElement);
    });
    const outputElement = buttonElement;
    expect(outputElement.textContent).toBe("x");
  });
  test("if the right operation is passed for division", () => {
    render(<Calculator />);
    let buttonElement;
    act(() => {
      buttonElement = screen.getByText("÷");
      userEvent.click(buttonElement);
    });
    const outputElement = buttonElement;
    expect(outputElement.textContent).toBe("÷");
  });
  test("if the right operation is passed for modulo", () => {
    render(<Calculator />);
    let buttonElement;
    act(() => {
      buttonElement = screen.getByText("%");
      userEvent.click(buttonElement);
    });
    const outputElement = buttonElement;
    expect(outputElement.textContent).toBe("%");
  });
});
