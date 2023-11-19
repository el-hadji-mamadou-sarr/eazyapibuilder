import { generation } from "./generation";

const express = require("express");
const app = express();

generation(app);

app.listen(3000);
