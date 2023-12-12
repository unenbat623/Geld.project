const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    await sql`INSERT INTO users(name, email, password) VALUES(${name}, ${email}, ${hashedPassword})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const signin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const findUser = await sql`SELECT * FROM users WHERE email=${userEmail}`;

    if (findUser.length === 0) {
      return res.status(400).json({ message: "user not found" });
    }

    const isCheck = bcrypt.compareSync(userPassword, findUser[0].password);

    if (!isCheck) {
      return res.status(400).json({ message: "wrong username or password" });
    }

    const { password, ...user } = findUser[0];

    res.status(201).json({ message: "success", user });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};
const addCategory = async (req, res) => {
  try {
    const { name, description, category_img, category_color } = req.body;
    await sql`INSERT INTO category(name, description, category_img, category_color) VALUES(${name}, ${description},${category_img},${category_color})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const addTransaction = async (req, res) => {
  try {
    const { user_id, catergory_id } = req.params;
    const { name, description } = req.body;
    await sql`INSERT INTO category(name, description, category_img, category_color) VALUES(${name},${user_id} ${description},${catergory_id})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};
const deleteTransaction = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    await sql`DELETE FROM transactions WHERE id=${id}`;
    res.status(201).json({ message: "transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};
const updateTransaction = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const { name, description, amount, transaction_type } = req.body;
    await sql`UPDATE transactions SET name=${name}, description=${description}, amount=${amount}, transaction_type=${transaction_type} WHERE id=${id}`;
    res.status(201).json({ message: "transaction updated" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

module.exports = { signup, signin, addCategory, addTransaction, updateTransaction, deleteTransaction };
