const User = require("../models/users.js")
exports.getUsersData = async (req, res) => {

  const users = await User.find()
  res.status(200).json({ data: "get huselt irj bnaaa" })
}