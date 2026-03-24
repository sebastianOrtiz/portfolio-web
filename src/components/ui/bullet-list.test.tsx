import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BulletList } from "./bullet-list";

describe("BulletList", () => {
  it("renders title and all items", () => {
    render(<BulletList title="My List" items={["A", "B", "C"]} />);
    expect(screen.getByText("My List")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("C")).toBeInTheDocument();
  });

  it("renders correct number of list items", () => {
    const { container } = render(<BulletList title="List" items={["X", "Y"]} />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
  });

  it("renders empty list without errors", () => {
    const { container } = render(<BulletList title="Empty" items={[]} />);
    expect(container.querySelectorAll("li")).toHaveLength(0);
  });
});
