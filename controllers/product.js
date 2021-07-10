import expressAsyncHandler from "express-async-handler";
import Product from "../models/product.model.js";

export const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({},(e, doc)=> {
    console.log(doc)
    if(doc.length === 0 || e){
      return res.json({message: "123"})
    } else {
      return res.send(doc)
    }
  });
  // res.send({ products });
});

export const addProducts = expressAsyncHandler(async (req, res) => {
  const createProduct = await new Product({
    name: req.body.name,
    sex: req.body.sex,
    category: req.body.category,
    brand: req.body.brand,
    price: req.body.price,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    stock: req.body.stock,
    size: req.body.size,
    image: req.body.image
  });
  createProduct.save()
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
});
