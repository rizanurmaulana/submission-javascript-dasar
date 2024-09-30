import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("should add correctly", () => {
  const numA = 1;
  const numB = 1;

  const actualValue = sum(numA, numB);

  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});
