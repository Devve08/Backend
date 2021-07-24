import expressAsyncHandler from "express-async-handler";
import Product from "../models/product.model.js";

export const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({}, (e, doc) => {
   
    if (doc.length === 0 || e) {
      return res.json({ message: "123" });
    } else {
      return res.send(doc);
    }
  });
});


export const addProducts = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot add empty fields",
    });
    return;
  }
  const product = new Product({
    name: req.body.name,
    sex: req.body.sex,
    category: req.body.category,
    brand: req.body.brand,
    price: req.body.price,
    description: req.body.description,
    rating: req.body.rating,
    stock: req.body.stock,
    size: req.body.size,
    numReviews : req.body.numReviews,
    image : req.file.fieldname
  });
  console.log("hi", req.file.fieldname)
  product
    .save()
    .then((data) => {
      res.send({message : "successful"})
     
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      })
    });
};




