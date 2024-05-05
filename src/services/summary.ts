import { departmentSummary } from "../../libs/departmentSummary";
import { IUser } from "../interfaces"

export const summary = (users: IUser[]) => ({
  byDepartments: () => {
    const departments = users.map((user: IUser) => [user.company.department]);
    const resp = Object.entries(departments).map(
      ([_, department]) => {
        const name = String(department);
        const departmentUsers = users.filter(
          (user: IUser) => user.company.department == name
        );
        return { [name]: departmentSummary(name, departmentUsers) };
      }
    );
    return resp;
  }
})