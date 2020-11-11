const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  data: { type: Date, default: Date.now },
  city: { type: String, require: true },
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("JobVacansy", schema);
