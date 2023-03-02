import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text '7'", () => {
      const buttontext = "7";

      render(<Button text={"7"} />);

      const expectedButton = screen.getByRole("button", { name: buttontext });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
