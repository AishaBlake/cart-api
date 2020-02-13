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

cartItems.post("/", (req, res) => {
  cart.push(req.body);
  res.status(201).json(req.body);
});

cartItems.put("/:id", (req, res) => {
  const selectedItem = cart.find(item => item.id === req.params.id);
  if (selectedItem) {
    const selectedIndex = cart.indexOf(selectedItem);
    cart[selectedIndex] = req.body;
    res.json(cart[selectedIndex]);
  } else {
    res.status(404).json("That item isn't in this cart!"); 
  }
});

cartItems.delete("/:id", (req, res) => {
  let selectedItem = cart.find(item => item.id === req.params.id);
  if (selectedItem) {
    const selectedIndex = cart.indexOf(selectedItem);
    cart.splice(selectedIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json("That student isn't in this class!");
  }
});

module.exports = cartItems;