import dotenv from "dotenv";
dotenv.config();
import express from "express";
// routers
import authenticatedRoute from "./routes/authenticatedRoute";
// middlewares
import errorMiddleware from "./middleware/errorHandler";

const app = express();
const port = process.env.PORT || 3001;

app.use("/api", authenticatedRoute);

app.get("/health-check", (req, res) => {
  res.send("We good.");
});

// Error middleware handler
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
