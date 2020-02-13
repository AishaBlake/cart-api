const express = require("express");
const cartItems = express.Router();

let cart = require("./cart-items");

cartItems.use(express.json());

cartItems.get("/", (req, res) => {
  res.json(cart);
});

module.exports = cartItems;