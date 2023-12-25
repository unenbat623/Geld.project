const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "images/")));

app.use("/auth", authRoutes);
app.use("/api/image", imageRoutes);
app.use("/users/", userRoutes);
app.use("/transactions", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа.`);
});
