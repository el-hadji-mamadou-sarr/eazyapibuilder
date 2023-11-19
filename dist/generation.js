"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generation = void 0;
const urls = require("./urls");
const generation = (app) => {
    urls.map(([url, view]) => {
        const viewInstance = new view();
        app.get(url, (req, res) => {
            viewInstance.list(req, res);
        });
        app.get(`${url}/:_id`, (req, res) => {
            viewInstance.param = req.params._id;
            viewInstance.retreive(req, res);
        });
        app.post(url, (req, res) => {
            viewInstance.create(req, res);
        });
        app.delete(`${url}/:_id`, (req, res) => {
            viewInstance.param = req.params._id;
            viewInstance.delete(req, res);
        });
        app.put(`${url}/:_id`, (req, res) => {
            viewInstance.update(req, res);
        });
    });
};
exports.generation = generation;
