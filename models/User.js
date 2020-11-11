const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  FirsName: { type: String, required: true, unique: false },
  LastName: { type: String, required: true, unique: false },
});

module.exports = model("User", schema);
