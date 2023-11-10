import { Request, Response, NextFunction } from "express";

const handleLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `User is accessing by using user agent: ${req.get("User-Agent")}`
  );
  next();
};

export default handleLogger;
