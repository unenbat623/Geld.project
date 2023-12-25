const { Router } = require("express");
const {
  signup,
  signin,
  addCategory,
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

module.exports = router;
