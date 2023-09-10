import dotenv from "dotenv";
import auth from "./utils/firebaseAdminSDK";
import express from "express";
import connectMongoose from "./utils/connectMongoose";
import cors from "cors";
// routers
import authenticatedRoute from "./routes/authenticatedRoute";
// middlewares
import errorMiddleware from "./middleware/errorHandler";
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3001;

app.use(cors());
app.use(express.json());

app.use("/api", authenticatedRoute);

app.get("/health-check", (req, res) => {
  res.send("We good.");
});

app.get("/", (req, res) => {
  res.redirect("/health-check");
});

// Error middleware handler
app.use(errorMiddleware);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, async () => {
    await connectMongoose();
    if (auth) {
      console.log("Firebase auth is initialized");
    }
    console.log(`Server is running on port ${port}`);
  });
} else {
  console.log("Server not up, in test mode: NODE_ENV = 'test'");
}

export default app;
