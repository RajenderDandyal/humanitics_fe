import { render, screen, act, fireEvent } from "@testing-library/react";
import App from "./App";

let containerRtl;

describe("render <App/>", () => {
  beforeEach(() => {
    const { container } = render(<App />);
    containerRtl = container;
  });

  test("renders textbox", () => {
    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();
  });

  test("textbox value", () => {
    const textbox = screen.getByRole("textbox");
    expect(textbox).toHaveAttribute("value", "GGGGGRYRG");
  });

  test("textbox change value of first sensor", () => {
    const textbox = screen.getByRole("textbox");

    act(() => {
      fireEvent.change(textbox, { target: { value: "RGGGGRYRG" } });
    });

    const firstSensor = containerRtl.querySelector("#head > div:nth-child(1)");
    expect(textbox).toHaveAttribute("value", "RGGGGRYRG");

    const changeStateButton = screen.getByRole("button", {
      name: /change state/i,
    });

    act(() => {
      fireEvent.click(changeStateButton);
    });

    expect(firstSensor).toHaveAttribute(
      "style",
      "transform: translate(-13px, -10px); background-color: red;"
    );
  });

  test("textbox change value of Second sensor", () => {
    const textbox = screen.getByRole("textbox");

    act(() => {
      fireEvent.change(textbox, { target: { value: "GYGGGRYRG" } });
    });

    const firstSensor = containerRtl.querySelector("#head > div:nth-child(2)");
    expect(textbox).toHaveAttribute("value", "GYGGGRYRG");

    const changeStateButton = screen.getByRole("button", {
      name: /change state/i,
    });

    act(() => {
      fireEvent.click(changeStateButton);
    });

    expect(firstSensor).toHaveAttribute(
      "style",
      "transform: translate(-12px, -16px); background-color: yellow;"
    );
  });
});
