const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    content: { type: String, lowercase: true, maxLength: 100 },
  },
  {
    collection: "product_collection",
  }
);

const ProductCollection = mongoose.model("product_collection", schema);

module.exports = ProductCollection;

/* product
name : ten san pham
item : [
    { color : #fff , quantity : 2 , size : 34}
]


 
*/
