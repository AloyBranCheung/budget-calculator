import mockBudgetDataJSON from "./mocks/mockBudgetData.json";
import mockWithAuth from "./mocks/mockWithAuth";
import request from "supertest";
import app from "../server";
import { mockValidToken } from "./utils/constants";

jest.mock("../middleware/withAuth", () => mockWithAuth);
jest.mock("../models/BudgetDataModel", () => ({
  findOne: jest.fn().mockReturnValue(mockBudgetDataJSON),
}));

describe("test budget data router", () => {
  it("should return the budget data", async () => {
    const response = await request(app)
      .get("/api/data")
      .set("Authorization", `Bearer ${mockValidToken}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBudgetDataJSON);
  });
});
