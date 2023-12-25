const { Router } = require("express");

const {
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getTransaction,
} = require("../controller/transactionController");

const router = Router();

router.route("/").get(getTransaction).post(addTransaction);

router.route("/:id").delete(deleteTransaction);
router.route("/:id").put(updateTransaction);

module.exports = router;
