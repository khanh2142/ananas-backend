const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    content: { type: String, lowercase: true, maxLength: 30 },
    type_id: { type: Schema.Types.ObjectId },
  },
  { collection: "product_category" }
);

const ProductCategory = mongoose.model("product_category", schema);

module.exports = ProductCategory;
