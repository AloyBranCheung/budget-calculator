import dotenv from "dotenv";
dotenv.config();
import auth from "./utils/firebaseAdminSDK";
import express from "express";
import connectMongoose from "./utils/connectMongoose";
import cors from "cors";
// routers
import authenticatedRoute from "./routes/authenticatedRoute";
// middlewares
import errorMiddleware from "./middleware/errorHandler";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", authenticatedRoute);

app.get("/health-check", (req, res) => {
  res.send("We good.");
});

// Error middleware handler
app.use(errorMiddleware);

app.listen(port, () => {
  connectMongoose();
  if (auth) {
    console.log("Firebase auth is initialized");
  }
  console.log(`Server is running on port ${port}`);
});
