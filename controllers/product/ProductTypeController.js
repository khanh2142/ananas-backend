const db = require("../../models/product/ProductType");

const get = async (req, res) => {
  try {
    const data = await db.find();
    res.send(data);
  } catch {
    res.send(null);
  }
};

const create = async (req, res) => {
  try {
    const { type, exchange, warranty } = req.body;
    const newData = new db({
      type: type,
      exchange: exchange,
      warranty: warranty,
      collect: [],
      category: [],
      material: [],
      color: [],
    });
    await newData.save();
    res.send("create successfully");
  } catch (e) {
    res.send(e);
  }
};

module.exports = { get, create };
