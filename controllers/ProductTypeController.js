const ProductType = require("../models/ProductType");

const getAllData = async () => {
  try {
    const data = await ProductType.find();
    return data;
  } catch {
    return null;
  }
};

const getDetailData = async (id) => {
  try {
    const data = await ProductType.findById(id);
    return data;
  } catch {
    return null;
  }
};

module.exports = { getAllData, getDetailData };
