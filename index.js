const express = require("express")
const userRoute = require('./routes/users.js')
const connect = require('./helper/db.js')

const app = express()
const port = 8000

app.use("/users", userRoute)
connect()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
