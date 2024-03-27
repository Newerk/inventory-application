const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartSchema = new Schema({
  name: { type: String, minLength: 2, required: true },
  manufacturer: {
    type: Schema.Types.ObjectId,
    ref: "Corporation",
    required: true,
  },
  part_type: {
    type: String,
    enum: ["Head", "Body", "Arms", "Legs", "Boosters", "FCS", "Generator"],
    required: true,
  },
});

PartSchema.virtual("url").get(function () {
  return `/catalog/part/${this._id}`;
});

module.exports = mongoose.model("Part", PartSchema);
