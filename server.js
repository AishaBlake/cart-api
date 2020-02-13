const express = require("express");
const app = express();
const port = 3000;
const cartItems = require("./cart-items-routes");

app.listen(port, () => console.log(`Listening on port: ${port}.`));

app.use("/cart-items/", cartItems);

app.get("/", (req, res) => {
  res.json("Welcome home!");
});