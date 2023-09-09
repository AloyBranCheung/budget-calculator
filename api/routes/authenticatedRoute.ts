import express from "express";
import withAuth from "../middleware/withAuth";
// controllers
import addSavingsGoal, {
  getSavingsGoal,
  updateSavingsGoal,
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

const router = express.Router();

router.use(withAuth);

// budget data
router.get("/data", getBudgetData);
router.put("/data", updateBudgetData);
router.delete("/data", resetBudgetData);

// savings goal
router.get("/savings-goal", getSavingsGoal);
router.post("/savings-goal", addSavingsGoal); // add
router.put("/savings-goal", updateSavingsGoal); // update

// budget categories/expenditures
router.put("/data/categories", updateBudgetCategories);
router.delete("/data/:category/:expenditureId", deleteExpenditure);

router.use(recalculateCurrTotal);

export default router;
