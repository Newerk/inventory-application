const mongoose = require("mongoose");
const { Schema } = mongoose;

const CorporationSchema = new Schema({
  name: { type: String, minLength: 2, required: true },
  weapons: [{ type: Schema.Types.ObjectId, ref: "Weapon" }],
  parts: [{ type: Schema.Types.ObjectId, ref: "Part" }],
});

CorporationSchema.virtual("url").get(function () {
  return `/catalog/corporation/${this._id}`;
});
