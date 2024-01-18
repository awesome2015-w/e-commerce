import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import products from "./data/Products.js"
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send(`Api is running`);
});
// Get all Products
app.get("/api/products", (req, res) => {
    res.json(products);
});
app.get("/a", (req, res) => {
    const product = products.find((p) => p._id  === req.params.id);
    res.json(products);
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});