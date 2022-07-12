const db = require("../../models/product/ProductDesgin");

const get = async (req, res) => {
  try {
    const data = await db.find();
    res.send(data);
  } catch {
    res.status(400);
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
    res.send("failed to create");
  }
};

module.exports = { get, create };
