require("dotenv").config();
require("colors");
const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
