import { Request, Response, NextFunction } from "express";
import auth from "../utils/firebaseAdminSDK";

const withAuth = async (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      await auth.verifyIdToken(token);
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
