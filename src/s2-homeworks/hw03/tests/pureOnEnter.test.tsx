import React from "react";
import { pureOnEnter } from "../GreetingContainer";

let added: boolean;

const addUser = () => {
  added = true;
};

beforeEach(() => {
  added = false;
});

test("calls addUser if 'Enter' key is pressed", () => {
  const fakeEvent = { key: "Enter" } as React.KeyboardEvent<HTMLInputElement>;
  pureOnEnter(fakeEvent, addUser);
  expect(added).toBe(true);
});

test("does not call addUser if key is not 'Enter'", () => {
  const fakeEvent = { key: "Escape" } as React.KeyboardEvent<HTMLInputElement>;
  pureOnEnter(fakeEvent, addUser);
  expect(added).toBe(false);
});
