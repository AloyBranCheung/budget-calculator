import express from "express";
import withAuth from "../middleware/withAuth";
// controllers
import {
  getBudgetData,
  updateBudgetData,
  resetBudgetData,
} from "../controllers/budgetData";
import { updateBudgetCategories } from "../controllers/budgetCategories";
import recalculateTotal from "../middleware/calculateAndUpdateAllFields";

const router = express.Router();

router.use(withAuth);

router.get("/data", getBudgetData);
router.put("/data", updateBudgetData);
router.delete("/data", resetBudgetData);

router.put("/data/categories", updateBudgetCategories);
router.use(recalculateTotal);

// TODO: add middleware to recalculate everything at the end

export default router;
