import request from "supertest";
import app from "../src/app";
import { IDepartment, IUser } from "../src/interfaces";

describe("GET /users", () => {
  it("responds with json containing all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toMatchObject<{users: IUser}>(res.body.data)
  });
});

describe("GET /users/summary", () => {
  it("responds with json containing summary of user information", async () => {
    const res = await request(app).get("/users/summary");
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toMatchObject<{ data: IDepartment }>(res.body.data);
  });
});
