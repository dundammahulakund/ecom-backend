const express = require("express");
const { isAuth } = require("../middlewares/authMiddlewares");
const {
  verifyPayment,
  createRazorOrder,
} = require("../controllers/orderController");
const orderRoutes = express.Router();

orderRoutes.post("/create-razorpay-order", isAuth, createRazorOrder);

orderRoutes.post("/verify-payment", isAuth, verifyPayment);
module.exports = orderRoutes;
