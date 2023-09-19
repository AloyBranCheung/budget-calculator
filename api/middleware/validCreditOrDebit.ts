import { type Response, type NextFunction } from "express";
import { type RequestWithDecodedIdToken } from "./withAuth";
import CreditOrDebit from "../@types/creditOrDebit";

const validCreditOrDebit = async (
  req: RequestWithDecodedIdToken,
  res: Response,
  next: NextFunction
) => {
  const { creditOrDebit } = req.body;
  try {
    if (req.method === "GET" || req.method === "DELETE") {
      next();
    } else {
      if (!Object.values(CreditOrDebit).includes(creditOrDebit)) {
        throw new Error("Invalid creditOrDebit");
      }
      next();
    }
  } catch (error) {
    next(error);
  }
};

export default validCreditOrDebit;
