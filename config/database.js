const mongoose = require("mongoose");

module.exports = function initDatabase() {
  const username = process.env.USER;
  const password = process.env.PASSWORD;

  const url = `mongodb+srv://${username}:${password}@ananascluster.4e2remg.mongodb.net/ananas?retryWrites=true&w=majority`;

  const option = {
    socketTimeoutMS: 30000,
  };

  mongoose
    .connect(url, option)
    .then(() => {
      console.log("connected");
    })
    .catch(() => console.log("failed to connect"));
};
