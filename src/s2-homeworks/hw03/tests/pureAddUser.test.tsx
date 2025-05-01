import { pureAddUser } from "../GreetingContainer";

let name: string;
let error: string;
let added: boolean;

const setName = (newName: string) => {
  name = newName;
};
const setError = (newError: string) => {
  error = newError;
};
const addUserCallback = () => {
  added = true;
};

beforeEach(() => {
  name = "";
  error = "";
  added = false;
});

test("should add user and reset name when name is valid", () => {
  name = "John";
  pureAddUser(name, setError, setName, addUserCallback);
  expect(name).toBe("");
  expect(error).toBe("");
  expect(added).toBe(true);
});

test("should show error and not add user when name is empty", () => {
  name = "";
  pureAddUser(name, setError, setName, addUserCallback);
  expect(name).toBe("");
  expect(error).toBe("Ошибка! Введите имя!");
  expect(added).toBe(false);
});

test("should show error and not add user when name is only spaces", () => {
  name = "    ";
  pureAddUser(name, setError, setName, addUserCallback);
  expect(name).toBe("   "); // name не сбрасывается
  expect(error).toBe("Ошибка! Введите имя!");
  expect(added).toBe(false);
});
