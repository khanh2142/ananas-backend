const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    type: { type: String, maxLength: 15 },
    collect: { type: Array },
    category: { type: Array },
    material: { type: Array },
    color: { type: Array },
    warranty: { type: String },
    exchange: { type: String },
  },
  { collection: "product_type" }
);

const ProductType = mongoose.model("product_type", schema);

module.exports = ProductType;
