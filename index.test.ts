import { describe, expect, it } from "vitest";
import { myProject } from "./index";

describe("my project", () => {
  it("works", () => {
    expect(myProject).toBe("My project");
  });
});
