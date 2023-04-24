const express = require("express");
const route = express.Router();
const productController = require("../controllers/product.controller");

route.get("/", productController.getProducts);

module.exports = route;
