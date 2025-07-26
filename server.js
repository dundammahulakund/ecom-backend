const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", productRoutes);

app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGODB_URL)

  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("Server is running in port 3000 ");
    });
  })
  .catch((error) => {
    console.log("Error connecting to database:", error.message);
  });
