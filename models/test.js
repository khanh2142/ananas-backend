const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    content: String,
  },
  { collection: "test" }
);

const Test = mongoose.model("test", schema);

module.exports = Test;
