import express from "express";
import withAuth from "../middleware/withAuth";
// controllers
import { getBudgetData, updateBudgetData } from "../controllers/budgetData";

const router = express.Router();

router.use(withAuth);

router.get("/data", getBudgetData);
router.put("/data", updateBudgetData);

export default router;
