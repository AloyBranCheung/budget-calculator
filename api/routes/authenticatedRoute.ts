import express from "express";
import withAuth from "../middleware/withAuth";

const router = express.Router();

router.use(withAuth);

router.get("/testAuth", (req, res) => {
  res.send("You are authenticated");
});

export default router;
