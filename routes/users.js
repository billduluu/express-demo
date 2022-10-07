const express = require("express")
const bodyParser = require("body-parser")
const { getUsersData } = require("../controller/users")

const router = express.Router()

router.get("/", getUsersData)
router.use(bodyParser.json())

router.post("/post", (req, res) => {
  console.log(req.body)
  res.status(200).json({ data: "post huselt irlee ene n user route" })
})

module.exports = router
