import express from "express";
import withAuth from "../middleware/withAuth";
// controllers
import addSavingsGoal, {
  getSavingsGoal,
  contributeToSavingsGoal,
} from "../controllers/savings";
import {
  getBudgetData,
  updateBudgetData,
  resetBudgetData,
} from "../controllers/budgetData";
import {
  updateBudgetCategories,
  deleteExpenditure,
} from "../controllers/budgetCategories";
// middleware
import recalculateCurrTotal from "../middleware/calculateAndUpdateAllFields";
import validCreditOrDebit from "../middleware/validCreditOrDebit";

const router = express.Router();

router.use(withAuth);
router.use(validCreditOrDebit);

// budget data
router.get("/data", getBudgetData);
router.put("/data", updateBudgetData);
router.delete("/data", resetBudgetData);

// savings goal
router.get("/savings-goal", getSavingsGoal);
router.post("/savings-goal", addSavingsGoal); // add
router.post("/savings-goal/contribute", contributeToSavingsGoal);

// budget categories/expenditures
router.put("/data/categories", updateBudgetCategories);
router.delete("/data/:category/:expenditureId", deleteExpenditure);

router.use(recalculateCurrTotal);

export default router;
