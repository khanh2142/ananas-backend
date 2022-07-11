const db = require("../models/ProductStatus");

const ProductTypeController = require("./ProductTypeController");

const get = (req, res) => {
  Test.find()
    .then((data) => {
      res.send(data);
    })
    .catch(() => res.send("no data found"));
};

const getData = async (req, res) => {
  const data = await ProductTypeController.getDetailData(
    "62caf2568e7c4d952fa8c9ce"
  );
  res.send(data);
};

const importData = async (req, res) => {
  const insertData = {
    content: "new arrival",
  };
  const data = new db(insertData);
  //   data.save();
};

module.exports = { get, getData, importData };
