const asyncHandler = require("express-async-handler");
const Part = require("../models/part");

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

    res.render("parts_list", {
      title: "Parts",
      partsArr: allParts,
    });
  }),

  //get head parts
  parts_head: asyncHandler(async (req, res, next) => {
    const headParts = await Part.find({ part_type: "Head" })
      .sort({ name: 1 })
      .exec();

    res.render("parts_list_filtered", {
      title: "Parts",
      subtitle: "Head Parts",
      filteredParts: headParts,
    });
  }),

  //get body parts
  parts_body: asyncHandler(async (req, res, next) => {
    const bodyParts = await Part.find({ part_type: "Body" })
      .sort({ name: 1 })
      .exec();

    res.render("parts_list_filtered", {
      title: "Parts",
      subtitle: "Body Parts",
      filteredParts: bodyParts,
    });
  }),

  //get arms parts
  parts_arms: asyncHandler(async (req, res, next) => {
    const armParts = await Part.find({ part_type: "Arms" })
      .sort({ name: 1 })
      .exec();

    res.render("parts_list_filtered", {
      title: "Parts",
      subtitle: "Arm Parts",
      filteredParts: armParts,
    });
  }),

  //get legs parts
  parts_legs: asyncHandler(async (req, res, next) => {
    const legParts = await Part.find({ part_type: "Legs" })
      .sort({ name: 1 })
      .exec();

    res.render("parts_list_filtered", {
      title: "Parts",
      subtitle: "Leg Parts",
      filteredParts: legParts,
    });
  }),

  //get boosters parts
  parts_boosters: asyncHandler(async (req, res, next) => {
    const boosterParts = await Part.find({ part_type: "Boosters" })
      .sort({ name: 1 })
      .exec();

    res.render("parts_list_filtered", {
      title: "Parts",
      subtitle: "Booster Parts",
      filteredParts: boosterParts,
    });
  }),

  //get fcs parts
  parts_fcs: asyncHandler(async (req, res, next) => {
    const fcsParts = await Part.find({ part_type: "FCS" })
      .sort({ name: 1 })
      .exec();

    res.render("parts_list_filtered", {
      title: "Parts",
      subtitle: "FCS Parts",
      filteredParts: fcsParts,
    });
  }),

  //get generator parts
  parts_generator: asyncHandler(async (req, res, next) => {
    const generatorParts = await Part.find({ part_type: "Generator" })
      .sort({ name: 1 })
      .exec();

    res.render("parts_list_filtered", {
      title: "Parts",
      subtitle: "Generator Parts",
      filteredParts: generatorParts,
    });
  }),
};
