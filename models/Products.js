const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productDataSchema = new Schema(
    {
        shadeNo: String,
        shadeName: String,
        imgUrl: String,
        lab : [Number]
    }
);
const ProductData = mongoose.model("ProductData", productDataSchema, "productData");

module.exports = ProductData;

