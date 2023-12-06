const { Router } = require("express");
const {
  signup,
  signin,
  addCategory,
  addTransaction,
} = require("../controller/authController");

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/addCategory").post(addCategory);
router.route("/addTransaction").post(addTransaction);

module.exports = router;
