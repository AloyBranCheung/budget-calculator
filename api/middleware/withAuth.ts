import { Request, Response, NextFunction } from "express";
import { DecodedIdToken } from "firebase-admin/auth";
import auth from "../utils/firebaseAdminSDK";

interface RequestWithDecodedIdToken extends Request {
  decodedIdToken?: DecodedIdToken;
}

const withAuth = async (
  req: RequestWithDecodedIdToken,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decodedIdToken = await auth.verifyIdToken(token);
      req.decodedIdToken = decodedIdToken;
      next();
    } catch (error) {
      if (error instanceof Error) {
        error.message = "Unauthorized: Invalid token";
      }
      next(error);
    }
  } else {
    res.status(401).send("Unauthorized: No token provided");
  }
};

export default withAuth;
