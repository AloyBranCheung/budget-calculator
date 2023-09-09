import { type NextFunction, type Response } from "express";
import { type RequestWithDecodedIdToken } from "../middleware/withAuth";
// models
import SavingsGoalModel from "../models/SavingsGoalModel";

const addSavingsGoal = async (
  req: RequestWithDecodedIdToken,
  res: Response,
  next: NextFunction
) => {
  const { firebaseUid } = req;
  const {
    currentAmountContributed,
    descriptionOfGoal,
    nameOfGoal,
    targetAmount,
  } = req.body;
  console.log("req.body", req.body);
  if (!firebaseUid) {
    next(new Error("No firebase uid"));
  }
  try {
    const savingsGoal = await SavingsGoalModel.findOne({
      firebaseUserUid: firebaseUid,
    });
    if (!savingsGoal) {
      await SavingsGoalModel.create({
        firebaseUserUid: firebaseUid,
        currentAmountContributed,
        descriptionOfGoal,
        nameOfGoal,
        targetAmount,
      });
    } else {
      await SavingsGoalModel.findOneAndUpdate(
        {
          firebaseUserUid: firebaseUid,
        },
        {
          currentAmountContributed,
          descriptionOfGoal,
          nameOfGoal,
          targetAmount,
        }
      );
    }
    res.status(200).send("OK");
  } catch (error) {
    console.log("Error creating or updating savings goal.");
    next(error);
  }
};

export default addSavingsGoal;

export const getSavingsGoal = async (
  req: RequestWithDecodedIdToken,
  res: Response,
  next: NextFunction
) => {
  const { firebaseUid } = req;
  if (!firebaseUid) {
    next(new Error("No firebase uid"));
  }
  try {
    const savingsGoal = await SavingsGoalModel.findOne({
      firebaseUserUid: firebaseUid,
    });
    if (savingsGoal) {
      res.status(200).send(savingsGoal);
    } else {
      res.status(200).send({ message: "Not found" });
    }
  } catch (error) {
    next(error);
  }
};
