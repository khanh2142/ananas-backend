const route = require("express").Router();

const controller = require("../../controllers/product/ProductTypeController");

route.get("/", controller.get);
route.post("/", controller.create);

module.exports = route;
