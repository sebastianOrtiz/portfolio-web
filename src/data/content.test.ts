import { describe, it, expect } from "vitest";
import { siteConfig, skills, projects } from "./content";

describe("siteConfig", () => {
  it("has required fields", () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.headline).toBeTruthy();
    expect(siteConfig.email).toContain("@");
    expect(siteConfig.github).toMatch(/^https:\/\/github\.com\//);
    expect(siteConfig.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
  });
});

describe("skills", () => {
  it("has at least 5 categories", () => {
    expect(skills.length).toBeGreaterThanOrEqual(5);
  });

  it("each category has a name and at least one item", () => {
    skills.forEach((group) => {
      expect(group.category).toBeTruthy();
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it("has no duplicate categories", () => {
    const categories = skills.map((s) => s.category);
    expect(new Set(categories).size).toBe(categories.length);
  });
});

describe("projects", () => {
  it("has at least 3 projects", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });

  it("each project has required fields", () => {
    projects.forEach((project) => {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);
      expect(["live", "coming-soon"]).toContain(project.status);
    });
  });

  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
