import { IUser } from "../src/interfaces";
import { countGender } from "./countGender";
import { countHairColor } from "./countHairColor";
import { findAgeRange } from "./findAgeRange";

export const departmentSummary = (department: string, users: IUser[]) => {
  const hair = countHairColor(users);
  const ageRange = findAgeRange(users);
  const genders = countGender(users)
  let resp;

  for (const user of users){
    resp = {
      male: genders?.male || 0,
      female: genders?.female || 0,
      ageRange,
      hair,
      addressUser: Object.entries([`${user.firstName}${user.lastName}`]).map(
        ([_, item]) => ({ [String(item)]: user.address.postalCode })
      )[0],
    };
  }

  return resp;
};