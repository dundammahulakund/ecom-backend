const express = require("express");

const {
  addToCart,
  getCart,
  clearCart,
  removeFromCart,
  updateQuntity,
} = require("../controllers/cartController");

const { isAuth } = require("../middlewares/authMiddlewares");

const cartRouter = express.Router();

module.exports = cartRouter;

cartRouter.get("/cart", isAuth, getCart);
cartRouter.post("/cart/add", isAuth, addToCart);
cartRouter.delete("/cart", isAuth, clearCart);
cartRouter.put("/cart", isAuth, updateQuntity);
cartRouter.delete("/cart/product", isAuth, removeFromCart);

module.exports = cartRouter;
