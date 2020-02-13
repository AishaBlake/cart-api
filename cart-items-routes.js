const express = require("express");
const cartItems = express.Router();

let cart = require("./cart-items");

cartItems.use(express.json());

cartItems.get("/", (req, res) => {
  res.json(cart);
});

cartItems.get("/:id", (req, res) => {
  let selectedItem = cart.find(item => item.id === req.params.id);
  if (selectedItem) {
    res.json(selectedItem);
  } else {
    res.status(404).json("That item isn't in this cart!");
  }
});

module.exports = cartItems;