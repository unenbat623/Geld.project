const { Router } = require("express");

const {
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getTransaction,
  getTotalIncomeExpense,
} = require("../controller/transactionController");

const router = Router();

router.route("/").get(getTransaction).post(addTransaction);
router.route("/total").get(getTotalIncomeExpense);
router.route("/:id").delete(deleteTransaction);
router.route("/:id").put(updateTransaction);

module.exports = router;
