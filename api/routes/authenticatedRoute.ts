import express from "express";
import withAuth from "../middleware/withAuth";
// controllers
import { getData } from "../controllers/data";

const router = express.Router();

router.use(withAuth);

router.get("/data", getData);

export default router;
