const asyncHandler = require("express-async-handler");
const Corporation = require("../models/coporation");
const Weapon = require("../models/weapon");
const Part = require("../models/part");

module.exports = {
  placeholder: asyncHandler(async (req, res, next) => {
    //placeholder
    res.render("index", {
      title: "Welcome to The Parts Shop 621",
    });
  }),

  //get all corporations
  corp_list: asyncHandler(async (req, res, next) => {
    const allCorps = await Corporation.find().sort({ name: 1 }).exec();

    res.render("corp_list", {
      title: "Corporations",
      corporations: allCorps,
    });
  }),

  //get details of selected corporation
  corp_detail: asyncHandler(async (req, res, next) => {
    const corp = await Corporation.findById(req.params.id)
      .populate("weapons")
      .populate("parts")
      .exec();

    res.render("corp_detail", {
      title: corp.name,
      weapons: corp.weapons,
      parts: corp.parts,
    });
  }),
};
