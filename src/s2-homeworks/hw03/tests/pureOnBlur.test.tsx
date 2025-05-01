import { pureOnBlur } from "../GreetingContainer";

let error: string;
const setError = (value: string) => {
  error = value;
};

beforeEach(() => {
  error = "";
});

test("should NOT set error if name is not empty", () => {
  pureOnBlur("1", setError);
  expect(error).toBe("");
});

test("should set error if name is empty string", () => {
  pureOnBlur("", setError);
  expect(error).toBe("Ошибка! Введите имя!");
});

test("should set error if name is only spaces", () => {
  pureOnBlur("    ", setError);
  expect(error).toBe("Ошибка! Введите имя!");
});
