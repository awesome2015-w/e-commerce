import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/Products.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler} from "./middleware/errorHandler.js";
connectDB();
const app = express();

app.use(notFound);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send(`Api is running`);
});
//everytime we add a new route to our application, we need to include it here in the main server file
//when getting the api products route it will call on the function inside of productRoutes that has been imported above
app.use("/api/products", productRoutes);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
