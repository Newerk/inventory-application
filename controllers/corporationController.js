const asyncHandler = require("express-async-handler");
const Corporation = require("../models/coporation");

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
};
