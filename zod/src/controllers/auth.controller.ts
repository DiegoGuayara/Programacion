import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.send("Login");
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
