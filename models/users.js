const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
  firstName: String,
  age: Number,
})

const UserModel = model("User", UserSchema)

module.exports = UserModel
