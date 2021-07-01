import { Mongoose } from "mongoose";

const Schema = Mongoose.Schema;

const productSchema = new Schema({
    product_name : {
        type: String,
        required: true
    },

    image : {
        type: String,
        required: true
    },

    sex : {
        type: String,
        required: true
    },

    category : {
        type: String,
        required : true
    },

    stock : {
        type : Number,
        required: true
    },

    Price : {
        type : Number,
        required : true
    },

    rating : {
        type : Number,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    brand : {
        type : String,
        required : true
    },

    size : {
        type : String,
        required : true
    },

    product_ID : {
        type : Number,
        unique : true,
        required : true
    }
})


const Product = mongoose.model("Product", productSchema);

module.exports = Product;