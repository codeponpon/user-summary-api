import { IUser } from "../src/interfaces";

export const findAgeRange = (users: IUser[]) => {
  let minAge = Infinity,
    maxAge = -Infinity;

  for (const user of users) {
    const age = Number(user.age);
    maxAge = Math.max(maxAge, age);
    minAge = Math.min(minAge, age);
  }

  return { min: minAge, max: maxAge };
};
