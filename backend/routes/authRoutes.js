const { Router } = require("express");
const {
  signup,
  signin,
  addCategory,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getTransaction,
  transaction_param,
  getCategory,
} = require("../controller/authController");
const { upload } = require("../controller/imageController");
const { imageUpload } = require("../utils/upload");

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/addCategory").post(addCategory);
router.route("/getCategory").get(getCategory);
router.route("/upload/:userId").put(imageUpload.single("image"), upload);
router.route("/getTransaction").get(getTransaction);
router.route("/addTransaction").post(addTransaction);
router.route("/transactions/:id").delete(deleteTransaction);
router.route("/transactions/:id").put(updateTransaction);
router.route("/transactions").get(transaction_param);

module.exports = router;
