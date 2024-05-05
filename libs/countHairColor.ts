import { IUser } from "../src/interfaces";

export const countHairColor = (users: IUser[]) => {
  const hairColorCount: { [color: string]: number } = {};

  for (const user of users) {
    const hairColor = user.hair.color;
    hairColorCount[hairColor] = (hairColorCount[hairColor] || 0) + 1;
  }

  return hairColorCount;
};
