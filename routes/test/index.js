const route = require("express").Router();

const testController = require("../../controllers/testController");

route.get("/", testController.importData);

module.exports = route;
