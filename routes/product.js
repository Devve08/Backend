import express from "express";
import Product from "../models/product.model.js";
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler( async (req, res) =>{
  const products = await Product.find({});
  res.send({products})
}))

productRouter.get(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const createProduct = await Product.insertMany(data.products);
    res.send({ createProduct });
  })
);

productRouter.get(':id', expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
   if(product){
     res.send(product)
   }
   else{
     res.status(404).send({message: 'Product not found'})
   }
}))

export default productRouter;
