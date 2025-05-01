import { pureAddUserCallback } from "../HW3";
import { UserType } from "../HW3";

let users: UserType[] = [];

const mockSetUsers = (value: React.SetStateAction<UserType[]>) => {
  users =
    typeof value === "function"
      ? (value as (prev: UserType[]) => UserType[])(users)
      : value;
};

beforeEach(() => {
  users = [];
});

test("should add user with correct name and unique id", () => {
  pureAddUserCallback("Alice", mockSetUsers, users);

  expect(users.length).toBe(1);
  expect(users[0].name).toBe("Alice");
  expect(typeof users[0]._id).toBe("string");
  expect(users[0]._id.length).toBeGreaterThan(0);
});
