import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something broke!");
};

export default errorMiddleware;
