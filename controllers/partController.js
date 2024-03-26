const asyncHandler = require("express-async-handler");

module.exports = {
  placeholder: asyncHandler(async (req, res, next) => {
    //placeholder
    res.render("index", {
      title: "Welcome to The Parts Shop 621",
    });
  }),

    //get all parts
    parts_list: asyncHandler(async (req, res, next) => {
      const allParts = await Part.find().sort({ name: 1 }).exec();
  
      res.render("part_detail", {
        title: "Parts",
        partsArr: allParts,
      });
    }),
};
