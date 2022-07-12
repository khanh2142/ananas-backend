const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    content: { type: String, lowercase: true, maxLength: 30 },
  },
  { collection: "product_status" }
);

const ProductStatus = mongoose.model("product_status", schema);

module.exports = ProductStatus;
