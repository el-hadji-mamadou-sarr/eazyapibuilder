import { Response, Request } from "express";
export interface IBaseViews {
  permissions?: any;

  list(req: Request, res: Response): void;
  retreive(req: Request, res: Response): void;
  create(req: Request, res: Response): void;
  delete(req: Request, res: Response): void;
  update(req: Request, res: Response): void;
}
