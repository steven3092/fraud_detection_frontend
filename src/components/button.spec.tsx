import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./button";

describe("button is rendered", () => {
  it("renders the character information", () => {
    render(<Button />);

    expect(screen.getByText(/test/i)).not.toBeInTheDocument();
  });
});
