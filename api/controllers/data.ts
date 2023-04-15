import { Request, Response } from "express";

export const getData = (req: Request, res: Response) => {
  console.log("route reached");
  res.send("You are authenticated");
};
