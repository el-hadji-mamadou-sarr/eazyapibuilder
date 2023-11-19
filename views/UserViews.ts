const BaseViews = require("./BaseViews");
class UserViews {
  param?: number;
  list(req: any, res: any) {
    res.send("listed");
  }
  retreive(req: any, res: any) {
    res.send("retreived");
  }
  create(req: any, res: any) {
    res.send("created");
  }
  delete(req: any, res: any) {
    res.send("deleted");
  }
  update(req: any, res: any) {
    res.send("updated");
  }
}

module.exports = UserViews;
