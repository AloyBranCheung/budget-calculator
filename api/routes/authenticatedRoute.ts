import express from "express";
import withAuth from "../middleware/withAuth";
// controllers
import { getBudgetData, updateBudgetData } from "../controllers/budgetData";
import { updateBudgetCategories } from "../controllers/budgetCategories";

const router = express.Router();

router.use(withAuth);

router.get("/data", getBudgetData);
router.put("/data", updateBudgetData);

router.put("/data/categories", updateBudgetCategories);
// TODO: add middleware to recalculate everything at the end

export default router;
