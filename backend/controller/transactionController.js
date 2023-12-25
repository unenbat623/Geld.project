const { sql } = require("../config/pgDb");

const getTransaction = async (req, res) => {
  console.log("TR-GET", req.body);
  const { user_id } = req.params;
  console.log("user_id", user_id);
  try {
    const transaction =
      await sql`SELECT tr.name, tr.amount, tr.updated_at, tr.id, tr.transaction_type FROM transaction tr INNER JOIN category ct ON tr.category_id=ct.id WHERE tr.user_id=${user_id} ORDER BY created_at DESC`;

    res.status(200).json({ message: "success", transaction });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const addTransaction = async (req, res) => {
  console.log("TR-POST");
  try {
    const {
      user_id,
      category_id,
      name,
      amount,
      description,
      transaction_type,
      updated_at,
    } = req.body;

    console.log(
      "DDDD",
      user_id,
      name,
      amount,
      transaction_type,
      category_id,
      updated_at,
      description
    );
    await sql`INSERT INTO transaction(name, user_id, category_id,  description, transaction_type, amount, updated_at) VALUES(${name},${user_id}, ${category_id}, ${description}, ${transaction_type}, ${amount}, ${updated_at})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    console.log("TR-ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const deleteTransaction = async (req, res) => {
  console.log("UFO-DEL", req.body);
  try {
    const { id } = req.params;
    await sql`DELETE FROM transaction WHERE id=${id}`;
    res.status(201).json({ message: "transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

const updateTransaction = async (req, res) => {
  console.log("UFO", req.body);
  try {
    const { id } = req.params;
    const { name, description, amount, transaction_type } = req.body;
    await sql`UPDATE transaction SET name=${name}, description=${description}, amount=${amount}, transaction_type=${transaction_type} WHERE id=${id}`;
    res.status(201).json({ message: "transaction updated" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

module.exports = {
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransaction,
};
