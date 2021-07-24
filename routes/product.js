import express from "express";
import { getProducts, addProducts } from "../controllers/product.js";
import { checkUser } from "../middleware/authMiddleware.js";
import multer from "multer";

const productRouter = express.Router();

let storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        let ext = file.originalname
        cb(null, file.fieldname + "-" + Date.now()+ "-" + ext)
    }
})

const upload = multer({storage : storage})


productRouter.get("*", checkUser);

productRouter.get("/", getProducts);

productRouter.post("/create", upload.single("photo") ,addProducts);

export default productRouter;
