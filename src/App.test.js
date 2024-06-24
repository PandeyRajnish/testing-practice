import { render, screen } from "@testing-library/react";

import App from "./App";

test("First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle("AI generated image");
  const text2 = screen.getByText("Rajnish Pandey");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});
