const urls = require("./urls");

export const generation = (app: any) => {
  urls.map(([url, view]: [string, any]) => {
    const viewInstance = new view();
    app.get(url, (req: any, res: any) => {
      viewInstance.list(req, res);
    });
    app.get(`${url}/:_id`, (req: any, res: any) => {
      viewInstance.param = req.params._id;
      viewInstance.retreive(req, res);
    });
    app.post(url, (req: any, res: any) => {
      viewInstance.create(req, res);
    });
    app.delete(`${url}/:_id`, (req: any, res: any) => {
      viewInstance.param = req.params._id;
      viewInstance.delete(req, res);
    });
    app.put(`${url}/:_id`, (req: any, res: any) => {
      viewInstance.update(req, res);
    });
  });
};
