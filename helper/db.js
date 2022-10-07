const mongoose = require("mongoose")

const connect = async () => {
  try {
    await mongoose.connect("Url")
    console.log("Connected")
  } catch (e) {
    console.log(e)
  }
}

module.exports = connect