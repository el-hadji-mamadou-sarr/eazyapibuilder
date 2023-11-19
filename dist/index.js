"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generation_1 = require("./generation");
const express = require("express");
const app = express();
(0, generation_1.generation)(app);
app.listen(3000);
