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

const getExpSum = async (req, res) => {
  const { userId } = req.params;
  console.log("expUser", userId);
  try {
    const expSum =
      await sql`SELECT SUM(amount) FROM transactions WHERE user_id = ${userId} AND transaction_type = 'EXP'`;
    console.log("EXP", expSum[0]);
    res.status(200).json({ message: "success", data: expSum[0] });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const getIncSum = async (req, res) => {
  const { userId } = req.params;
  console.log("incUser", userId);
  try {
    const incSum =
      await sql`SELECT SUM(amount) FROM transactions WHERE user_id = ${userId} AND transaction_type = 'INC'`;
    console.log("inc", incSum[0]);
    res.status(200).json({ message: "success", data: incSum[0] });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const barTrans = async (req, res) => {
  const { userId } = req.params;
  try {
    const data =
      await sql`SELECT SUM(amount), name FROM transactions user_id = ${userId}`;
  } catch (error) {}
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
  getExpSum,
  getIncSum,
  barTrans,
};
