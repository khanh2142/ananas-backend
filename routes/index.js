const route = require("express").Router();

route.use("/", require("./test/index"));

module.exports = route;
