import express from "express";
import User from "./Models/UserModel.js";
import users from "./Data/users.js";
import Product from "./Models/ProductModel.js";
import products from "./Data/Products.js";
import asyncHandler from "express-async-handler";


const ImportData = express.Router();

ImportData.post(  "/users.js",  asyncHandler(
  async (req, res) => {
    await User.deleteOne({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
  
  );

ImportData.post(  "/products.js",  asyncHandler(
  async (req, res) => {
    await Product.deleteOne({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
    );

export default ImportData;
