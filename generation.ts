import { urls } from "./urls";
const bodyParser = require("body-parser");

export const generation = (app: any) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  urls.map((data) => {
    const [url, view] = data as [string, any];
    const viewInstance = new view();
    app.get(url, (req: any, res: any) => {
      viewInstance.list(req, res);
    });
    app.get(`${url}/:_id`, (req: any, res: any) => {
      viewInstance.retreive(req, res);
    });
    app.post(url, (req: any, res: any) => {
      viewInstance.create(req, res);
    });
    app.delete(`${url}/:_id`, (req: any, res: any) => {
      viewInstance.delete(req, res);
    });
    app.put(`${url}/:_id`, (req: any, res: any) => {
      viewInstance.update(req, res);
    });
  });
};
