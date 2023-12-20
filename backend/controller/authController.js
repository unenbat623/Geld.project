const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    console.log("SINGUP");
    const { name, email, password } = req.body;

    const findUser = await sql`SELECT email FROM users WHERE email=${email}`;
    console.log("FFIND", findUser);
    if (findUser.length > 0) {
      return res.status(400).json({ message: "User email is already exist" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data =
      await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${hashedPassword}) RETURNING id`;
    const { id } = data[0];
    res.status(201).json({ message: "success", user: { id } });
  } catch (error) {
    console.log("ERR", error);
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

const getCategory = async (req, res) => {
  console.log(req.body);
  try {
    const data = await sql`SELECT * FROM category`;
    res.status(201).json({ message: "Category", data });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

const getTransaction = async (req, res) => {
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

const transaction_param = async (req, res) => {
  try {
    const { user_id, catergory_id } = req.params;
    const { name, description } = req.body;
    await sql`INSERT INTO category(name, description, category_img, category_color) VALUES(${name},${user_id} ${description},${catergory_id})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

module.exports = {
  signup,
  signin,
  addCategory,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransaction,
  transaction_param,
  getCategory,
};
