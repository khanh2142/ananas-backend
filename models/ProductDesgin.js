const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    content: {
      type: String,
      lowercase: true,
      maxLength: 30,
    },
  },
  { collection: "product_design" }
);

const ProductDesgin = mongoose.model("product_design", schema);

module.exports = ProductDesgin;
