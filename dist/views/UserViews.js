"use strict";
const BaseViews = require("./BaseViews");
class UserViews {
    list(req, res) {
        res.send("listed");
    }
    retreive(req, res) {
        res.send("retreived");
    }
    create(req, res) {
        res.send("created");
    }
    delete(req, res) {
        res.send("deleted");
    }
    update(req, res) {
        res.send("updated");
    }
}
module.exports = UserViews;
