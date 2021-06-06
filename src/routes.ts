import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(
    '<h1 style="margin: 80px 80px 0px 80px">' +
      "Assignment 5, server running" +
      "</h1>" 
  );
});

export default router;
