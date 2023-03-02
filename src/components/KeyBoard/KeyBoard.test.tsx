import { render, screen } from "@testing-library/react";
import KeyBoard from "./KeyBoard";

describe("Given a KeyBoard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text '+'", () => {
      const buttontext = "+";

      render(<KeyBoard />);

      const expectedButtons = screen.getByRole("button", { name: buttontext });

      expect(expectedButtons).toBeInTheDocument();
    });

    test("Then it should show a button with the text '9'", () => {
      const buttontext = "9";

      render(<KeyBoard />);

      const expectedButtons = screen.getByRole("button", { name: buttontext });

      expect(expectedButtons).toBeInTheDocument();
    });
  });
});
