import { describe, it, expect } from "vitest";
import { getDictionary, locales } from "./index";
import en from "./en";
import es from "./es";

describe("i18n dictionaries", () => {
  it("getDictionary returns correct dictionary for each locale", () => {
    expect(getDictionary("en")).toBe(en);
    expect(getDictionary("es")).toBe(es);
  });

  it("falls back to English for unknown locale", () => {
    expect(getDictionary("fr" as "en")).toBe(en);
  });

  it("has all supported locales", () => {
    expect(locales).toContain("en");
    expect(locales).toContain("es");
  });

  it("both dictionaries have the same structure", () => {
    const enKeys = Object.keys(en).sort();
    const esKeys = Object.keys(es).sort();
    expect(enKeys).toEqual(esKeys);
  });

  it("nav sections match in both languages", () => {
    const enNav = Object.keys(en.nav).sort();
    const esNav = Object.keys(es.nav).sort();
    expect(enNav).toEqual(esNav);
  });

  it("projects items count matches in both languages", () => {
    expect(en.projects.items.length).toBe(es.projects.items.length);
  });

  it("projects items slugs match in both languages", () => {
    const enSlugs = en.projects.items.map((i) => i.slug);
    const esSlugs = es.projects.items.map((i) => i.slug);
    expect(enSlugs).toEqual(esSlugs);
  });

  it("no empty strings in English dictionary", () => {
    expect(en.hero.badge).toBeTruthy();
    expect(en.hero.headline).toBeTruthy();
    expect(en.about.title).toBeTruthy();
    expect(en.projects.title).toBeTruthy();
    expect(en.skills.title).toBeTruthy();
    expect(en.contact.title).toBeTruthy();
    expect(en.footer.builtWith).toBeTruthy();
  });

  it("no empty strings in Spanish dictionary", () => {
    expect(es.hero.badge).toBeTruthy();
    expect(es.hero.headline).toBeTruthy();
    expect(es.about.title).toBeTruthy();
    expect(es.projects.title).toBeTruthy();
    expect(es.skills.title).toBeTruthy();
    expect(es.contact.title).toBeTruthy();
    expect(es.footer.builtWith).toBeTruthy();
  });
});
