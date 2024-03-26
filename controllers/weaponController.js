const asyncHandler = require("express-async-handler");

module.exports = {
  placeholder: asyncHandler(async (req, res, next) => {
    //placeholder
    res.render("index", {
      title: "Welcome to The Parts Shop 621",
    });
  }),

  //get all weapons
  weapons_list: asyncHandler(async (req, res, next) => {
    const allWeapons = await Weapon.find().sort({ name: 1 }).exec();

    res.render("weapons_detail", {
      title: "Weapons",
      weaponssArr: allWeapons,
    });
  }),

  //get arm weapons
  weapons_arms: asyncHandler(async (req, res, next) => {
    const armWeapons = await Weapon.find({ attached_to: "Arms" })
      .sort({ name: 1 })
      .exec();

    res.render("weapons_list", {
      title: "Arm Weapons",
      filteredWeapons: armWeapons,
    });
  }),

  //get back weapons
  weapons_back: asyncHandler(async (req, res, next) => {
    const backWeapons = await Weapon.find({ attached_to: "Back" })
      .sort({ name: 1 })
      .exec();

    res.render("weapons_list", {
      title: "Back Weapons",
      filteredWeapons: backWeapons,
    });
  }),
};
