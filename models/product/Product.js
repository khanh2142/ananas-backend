const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: { type: String },
    product_id: { type: String },
    price_root: { type: Number },
    price_sale: { type: Number },
    description: { type: String },
    information: { type: String },
    color: { type: String },
    gender: { type: String },
    design: { type: String },
    collect: { type: String },
    status: { type: String },
    category: { type: String },
    type: { type: String },
    hide: { type: Boolean },
    list: { type: Array },
    image: { Type: Array },
  },
  {
    collection: "product",
  }
);

const Product = mongoose.model("product", schema);

module.exports = Product;
