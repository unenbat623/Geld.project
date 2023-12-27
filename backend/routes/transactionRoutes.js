const { Router } = require("express");

const {
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getTransaction,
  getExpSum,
  getIncSum,
} = require("../controller/transactionController");

const router = Router();

router.route("/").get(getTransaction).post(addTransaction);

router.route("/:id").delete(deleteTransaction);
router.route("/:id").put(updateTransaction);
router.route("/expsum/:userId").get(getExpSum);
router.route("/incsum/:userId").get(getIncSum);

module.exports = router;
