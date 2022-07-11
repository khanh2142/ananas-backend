const express = require("express");
const app = express();
const db = require("./config/database");

const dotenv = require("dotenv");

dotenv.config();

db(); // Khởi tạo database

app.use(require("./routes")); // Khởi tạo routing

const PORT = 8000 || process.env.PORT;

app.listen(PORT);
