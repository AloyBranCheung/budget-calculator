import express from "express";
import withAuth from "../middleware/withAuth";
// controllers
import {
  getBudgetData,
  updateBudgetData,
  resetBudgetData,
} from "../controllers/budgetData";
import {
  updateBudgetCategories,
  deleteExpenditure,
} from "../controllers/budgetCategories";
import recalculateCurrTotal from "../middleware/calculateAndUpdateAllFields";

const router = express.Router();

router.use(withAuth);

router.get("/data", getBudgetData);
router.put("/data", updateBudgetData);
router.delete("/data", resetBudgetData);

router.put("/data/categories", updateBudgetCategories);
router.delete("/data/:category/:expenditureId", deleteExpenditure);
router.use(recalculateCurrTotal);

export default router;
