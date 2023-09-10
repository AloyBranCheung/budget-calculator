/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/dot-notation */
import request from "supertest";
import app from "../server";
import { type Response, type NextFunction } from "express";
import { type RequestWithDecodedIdToken } from "../middleware/withAuth";
import { type DecodedIdToken } from "firebase-admin/auth";
import withAuth from "../middleware/withAuth";
import auth from "../utils/firebaseAdminSDK";
import { mockValidToken, mockInvalidToken, mockUid } from "./utils/constants";

describe("routes should be protected", () => {
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

jest.mock("../utils/firebaseAdminSDK", () => ({
  verifyIdToken: jest.fn(),
}));

describe("test withAuth middleware", () => {
  let req: RequestWithDecodedIdToken;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = {} as RequestWithDecodedIdToken;
    res = {} as Response;
    next = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should call next() if token is valid", async () => {
    const decodedIdToken: Partial<DecodedIdToken> = { uid: mockUid };
    (auth.verifyIdToken as jest.Mock).mockResolvedValue(decodedIdToken);

    req.headers = { authorization: `Bearer ${mockValidToken}` };

    await withAuth(req, res, next);

    expect(auth.verifyIdToken).toHaveBeenCalledWith(mockValidToken);
    expect(req.decodedIdToken).toEqual(decodedIdToken);
    expect(req.firebaseUid).toEqual(decodedIdToken.uid);
    expect(next).toHaveBeenCalled();
  });

  it("should call next() with error if token is invalid", async () => {
    const error = new Error("Invalid token");
    (auth.verifyIdToken as jest.Mock).mockRejectedValue(error);

    req.headers = { authorization: `Bearer ${mockInvalidToken}` };

    await withAuth(req, res, next);

    expect(auth.verifyIdToken).toHaveBeenCalledWith(mockInvalidToken);
    expect(next).toHaveBeenCalledWith(error);
  });

  it("should send 401 response if no token provided", async () => {
    req.headers = {};
    const sendMock = jest.fn();
    res.status = jest.fn().mockReturnValue({ send: sendMock });

    await withAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(sendMock).toHaveBeenCalledWith("Unauthorized: No token provided");
  });
});
