import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormInput } from "./form-input";

describe("FormInput", () => {
  it("renders a text input with label", () => {
    render(<FormInput id="name" label="Name" placeholder="Your name" />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
  });

  it("renders an email input when type is email", () => {
    render(<FormInput id="email" label="Email" type="email" />);
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("type", "email");
  });

  it("renders a textarea when rows is provided", () => {
    render(<FormInput id="message" label="Message" rows={5} />);
    const textarea = screen.getByLabelText("Message");
    expect(textarea.tagName).toBe("TEXTAREA");
    expect(textarea).toHaveAttribute("rows", "5");
  });

  it("sets required attribute", () => {
    render(<FormInput id="test" label="Required Field" required />);
    expect(screen.getByLabelText("Required Field")).toBeRequired();
  });
});
