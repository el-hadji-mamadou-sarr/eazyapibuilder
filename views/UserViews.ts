import { Request, Response } from "express";
import { IBaseViews } from "./IBaseViews";
import { User } from "@prisma/client";
import { prisma } from "../databse";

class UserViews implements IBaseViews {
  list(req: Request, res: Response) {
    return res.send(" users listed");
  }

  async create(req: Request, res: Response) {

    const userVal:User = req.body;
    const user = await prisma.user.create({
      data: {
        ...userVal,
      },
    });
    res.send(user);
  }
  retreive(req: Request, res: Response) {
    return res.send("user created");
  }
  delete(req: Request, res: Response) {
    return res.send("user deleted");
  }
  update(req: Request, res: Response) {
    return res.send("user updated");
  }
}

module.exports = UserViews;
