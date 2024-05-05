import { IUser } from "../src/interfaces";

export const countGender = (users: IUser[]) => {
  const genderCount: { [gender: string]: number } = {};

  for (const user of users) {
    const gender = user.gender;
    genderCount[gender] = (genderCount[gender] || 0) + 1;
  }

  return genderCount;
};
