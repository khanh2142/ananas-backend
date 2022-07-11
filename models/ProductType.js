const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    content: { type: String, lowercase: true, maxLength: 30 },
  },
  { collection: "product_type" }
);

const ProductType = mongoose.model("product_type", schema);

module.exports = ProductType;
