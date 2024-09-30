import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should add correctly", () => {
  const numA = 1;
  const numB = 1;

  const actualValue = sum(numA, numB);
  const expectedValue = 2;

  assert.equal(actualValue, expectedValue);
});

test("should return 0 if string is passed on numA parameter", () => {
  const numA = "1";
  const numB = 1;

  const actualValue = sum(numA, numB);
  const expectedValue = 0;

  assert.equal(actualValue, expectedValue);
});

test("should return 0 if string is passed on numB parameter", () => {
  const numA = 1;
  const numB = "1";

  const actualValue = sum(numA, numB);
  const expectedValue = 0;

  assert.equal(actualValue, expectedValue);
});

test("should return 0 if numA is not a number", () => {
  const numA = {};
  const numB = 4;

  const actualValue = sum(numA, numB);
  const expectedValue = 0;

  assert.equal(actualValue, expectedValue);
});

test("should return 0 if numB is not a number", () => {
  const numA = 5;
  const numB = [];

  const actualValue = sum(numA, numB);
  const expectedValue = 0;

  assert.equal(actualValue, expectedValue);
});

test("should return 0 if numA is negative", () => {
  const numA = -1;
  const numB = 1;

  const actualValue = sum(numA, numB);
  const expectedValue = 0;

  assert.equal(actualValue, expectedValue);
});

test("should return 0 if numB is negative", () => {
  const numA = 1;
  const numB = -1;

  const actualValue = sum(numA, numB);
  const expectedValue = 0;

  assert.equal(actualValue, expectedValue);
});

test("should return 0 if both numA and numB are negative", () => {
  const numA = -1;
  const numB = -1;

  const actualValue = sum(numA, numB);
  const expectedValue = 0;

  assert.equal(actualValue, expectedValue);
});
