const { sql } = require("../config/pgDb");

const signup = async (req, res) => {
  const{name,email,password}req.body;
  await sql`INSERT INTO users(email, name, password) VALUES(${})`;

  res.status(200).json({ message: "success" });
};

module.exports = { signup };
