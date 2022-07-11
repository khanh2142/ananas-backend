const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    content: {
      type: String,
      lowercase: true,
      maxLength: 30,
    },
    type_id: {
      type: Schema.Types.ObjectId,
    },
  },
  { collection: "product_design" }
);

const ProductDesgin = mongoose.model("product_design", schema);

module.exports = ProductDesgin;
