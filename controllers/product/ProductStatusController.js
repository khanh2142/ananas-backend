const db = require("../../models/product/ProductStatus");

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
    const { content } = req.body;
    const newData = new db({
      content: content,
    });
    await newData.save();
    res.send("create successfully");
  } catch {
    res.send("create failed");
  }
};

module.exports = { get, create };
