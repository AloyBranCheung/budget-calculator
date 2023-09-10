/* eslint-disable @typescript-eslint/dot-notation */
import request from "supertest";
import app from "../server";

const testRouteAuth = async (
  route: string,
  method: "get" | "post" | "put" | "delete"
) => {
  const res = await request(app)[method](route);
  expect(res.statusCode).toBe(401);
  expect(res.text).toBe("Unauthorized: No token provided");
  return res;
};

const itShould = (route: string) => `${route} should return 401.`;

describe("test auth", () => {
  it(itShould("/api/data"), async () => {
    const dataApiRoute = "/api/data";
    await testRouteAuth(dataApiRoute, "get");
    await testRouteAuth(dataApiRoute, "post");
    await testRouteAuth(dataApiRoute, "delete");
  });

  it(itShould("/api/savings-goal"), async () => {
    const savingsGoalApiRoute = "/api/savings-goal";
    await testRouteAuth(savingsGoalApiRoute, "get");
    await testRouteAuth(savingsGoalApiRoute, "post");
  });

  it(itShould("/api/savings-goal/contribute"), async () => {
    await testRouteAuth("/api/savings-goal/contribute", "post");
  });

  it(itShould("/api/data/categories"), async () => {
    await testRouteAuth("/api/data/categories", "put");
  });

  it(itShould("api/data/:category/:expenditureId"), async () => {
    await testRouteAuth("/api/data/needs/1", "delete");
  });
});
