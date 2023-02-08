import { expect, test } from "@jest/globals";
import { myProject } from "./index";

test("My project", () => {
  expect(myProject).toBe("My project");
});
