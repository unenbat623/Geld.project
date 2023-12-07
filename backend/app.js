const express = require("express");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");


const PORT = process.env.PORT;

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, "images/")));

app.use("/auth", authRoutes);
app.use("/api/image", imageRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа.`);
});
