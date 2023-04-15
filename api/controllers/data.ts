import { Request, Response } from "express";

export const getData = (req: Request, res: Response) => {
  res.send("You are authenticated");
};
