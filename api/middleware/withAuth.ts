import { Request, Response, NextFunction } from "express";
import auth from "../utils/firebaseAdminSDK";

const withAuth = async (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decodedToken = await auth.verifyIdToken(token);
      // TODO: call next
      console.log("decodedToken", decodedToken);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    res.status(401).send("Unauthorized: No token provided");
  }
};

export default withAuth;
