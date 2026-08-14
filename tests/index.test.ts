import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { SwapGrid } from "../src/archetype";

describe("M4TCH-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(1);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const g = new SwapGrid(undefined, 8);
g.set(4, 0, 7); g.set(4, 1, 7); g.set(4, 2, 7);
expect(g.matches(4, 1)).toBe(true);
g.set(5, 3, 7); g.set(5, 4, 7);
expect(g.matches(5, 3)).toBe(false);
  });
});
