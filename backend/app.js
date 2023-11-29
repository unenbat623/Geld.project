const express = require("express");
require("dotenv").config();
// const dotenv = require("dotenv");
// dotenv.config();

const { sql } = require("./config/pgDb");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("api/user", userRoute);

app.get("/", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM employee LIMIT 3`;
    console.log("ANSWER", result);
    res.status(200).send("amjilttai");
  } catch (error) {
    res.status(400).send("aldaa garlaa");
  }
});

app.listen(PORT, () => {
  console.log(`Server${PORT} actived`);
});
