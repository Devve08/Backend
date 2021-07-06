import expressAsyncHandler from "express-async-handler";


export const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  console.log(products)
  res.send({ products });
});

export const addProducts = expressAsyncHandler(async (req, res) => {
  const createProduct = await Product.insertMany(data.products);
  res.send({ createProduct });
});
