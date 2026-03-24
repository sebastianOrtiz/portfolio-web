import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeader } from "./section-header";

describe("SectionHeader", () => {
  it("renders the title", () => {
    render(<SectionHeader title="About Me" />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the accent bar", () => {
    const { container } = render(<SectionHeader title="Test" />);
    const bar = container.querySelector(".bg-accent-600");
    expect(bar).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<SectionHeader title="Projects" description="Some projects here" />);
    expect(screen.getByText("Some projects here")).toBeInTheDocument();
  });

  it("does not render description when not provided", () => {
    const { container } = render(<SectionHeader title="Skills" />);
    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs).toHaveLength(0);
  });
});
