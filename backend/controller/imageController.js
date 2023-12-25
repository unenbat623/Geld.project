const { sql } = require("../config/pgDb");

const upload = async (req, res) => {
  const { userId } = req.params;

  await sql`UPDATE users SET avatar_img =${req.file.path} WHERE id=${userId}`;

  res.status(201).json({ message: "success", imageUrl });
};

module.exports = { upload };
