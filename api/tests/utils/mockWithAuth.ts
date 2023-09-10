import { type Request, type Response, type NextFunction } from "express";
import { type DecodedIdToken } from "firebase-admin/auth";
import { mockUid } from "./constants";

const mockWithAuth = jest.fn(
  (req: Request, res: Response, next: NextFunction) => {
    // Customize the behavior of the mock middleware here
    // For example, you can skip the token verification process and directly call `next()`

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    req.decodedIdToken = {
      uid: mockUid,
    } as DecodedIdToken;

    req.firebaseUid = mockUid;

    next();
  }
);

export default mockWithAuth;
