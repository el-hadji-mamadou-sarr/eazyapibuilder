import { Request, Response } from "express";
import { IBaseViews } from "./IBaseViews";
import { User } from "@prisma/client";
import { prisma } from "../databse";

class UserViews implements IBaseViews {
  async list(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    res.send(users);
  }

  async create(req: Request, res: Response) {
    const userVal: User = req.body;
    console.log(userVal);
    const user = await prisma.user.create({
      data: {
        ...userVal,
      },
    });
    res.send(user);
  }
  retreive(req: Request, res: Response) {
    res.send("user created");
  }
  delete(req: Request, res: Response) {
    res.send("user deleted");
  }
  update(req: Request, res: Response) {
    res.send("user updated");
  }
}

module.exports = UserViews;
