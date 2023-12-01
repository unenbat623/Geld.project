const { Router } = require("express");
const { signup, signin, addCategory } = require("../controller/authController");

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/addCategory").post(addCategory);

module.exports = router;
