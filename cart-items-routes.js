const express = require("express");
const cartItems = express.Router();

let cart = require("./cart-items");

cartItems.use(express.json());

module.exports = cartItems;