const asyncHandler = require("express-async-handler");
const Part = require("../models/part");
const Corporation = require("../models/coporation");
const { body, validationResult } = require("express-validator");

module.exports = {
  placeholder: asyncHandler(async (req, res) => {
    //placeholder
    res.render("index", {
      title: "Welcome to The Parts Shop 621",
    });
  }),

  //get all parts
  parts_list: asyncHandler(async (req, res) => {
    const allParts = await Part.find().sort({ name: 1 }).exec();

    res.render("parts_list", {
      title: "Parts",
      partsArr: allParts,
    });
  }),

  //get part details
  parts_detail: asyncHandler(async (req, res) => {
    const part = await Part.findById(req.params.id)
      .populate("manufacturer")
      .exec();

    res.render("part_detail", {
      part: part,
    });
  }),

  //get head parts
  parts_head: asyncHandler(async (req, res) => {
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
  parts_body: asyncHandler(async (req, res) => {
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
  parts_arms: asyncHandler(async (req, res) => {
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
  parts_legs: asyncHandler(async (req, res) => {
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
  parts_boosters: asyncHandler(async (req, res) => {
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
  parts_fcs: asyncHandler(async (req, res) => {
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
  parts_generator: asyncHandler(async (req, res) => {
    const generatorParts = await Part.find({ part_type: "Generator" })
      .sort({ name: 1 })
      .exec();

    res.render("parts_list_filtered", {
      title: "Parts",
      subtitle: "Generator Parts",
      filteredParts: generatorParts,
    });
  }),

  part_create_get: asyncHandler(async (req, res) => {
    const partTypeEnumArr = Part.schema.path("part_type").enumValues;
    const manufacturerOptions = await Corporation.find()
      .sort({ name: 1 })
      .exec();

    res.render("part_create", {
      title: "Create New Part",
      partTypeOptions: partTypeEnumArr,
      manufacturerOptions: manufacturerOptions,
    });
  }),

  part_create_post: [
    body("part_name")
      .toUpperCase()
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name cannot be blank"),

    asyncHandler(async (req, res) => {
      const errors = validationResult(req);

      const manufacturer = await Corporation.findOne({
        name: req.body.manufacturer,
      }).exec();

      const partTypeEnumArr = Part.schema.path("part_type").enumValues;
      const manufacturerOptions = await Corporation.find()
        .sort({ name: 1 })
        .exec();

      const part = new Part({
        name: req.body.part_name,
        part_type: req.body.part_type,
        manufacturer: manufacturer,
      });

      if (!errors.isEmpty()) {
        res.render("part_create", {
          title: "Create New Part",
          partTypeOptions: partTypeEnumArr,
          manufacturerOptions: manufacturerOptions,
          errors: errors.array(),
        });
        return;
      } else {
        await Corporation.findByIdAndUpdate(manufacturer._id, {
          $push: {
            parts: part,
          },
        });

        await part.save();
        res.redirect(part.url);
      }
    }),
  ],

  part_update_get: asyncHandler(async (req, res) => {
    const partTypeEnumArr = Part.schema.path("part_type").enumValues;

    const [part, allCorps] = await Promise.all([
      Part.findById(req.params.id).populate("manufacturer").exec(),
      Corporation.find().sort({ name: 1 }).exec(),
    ]);

    res.render("part_update", {
      title: "Update Part",
      part: part,
      partTypeOptions: partTypeEnumArr,
      manufacturerOptions: allCorps,
    });
  }),

  part_update_post: [
    body("part_name")
      .toUpperCase()
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name cannot be blank"),

    asyncHandler(async (req, res) => {
      const errors = validationResult(req);

      const partTypeEnumArr = Part.schema.path("part_type").enumValues;

      const [part, allCorps] = await Promise.all([
        Part.findById(req.params.id).populate("manufacturer").exec(),
        Corporation.find().sort({ name: 1 }).exec(),
      ]);

      if (!errors.isEmpty()) {
        res.render("part_update", {
          title: "Update Part",
          part: part,
          partTypeOptions: partTypeEnumArr,
          manufacturerOptions: allCorps,
          errors: errors.array(),
        });
      } else {
        await Part.findByIdAndUpdate(req.params.id, {
          name: req.body.part_name,
          part_type: req.body.part_type_drop,
          manufacturer: req.body.manufacturers_drop,
        });

        res.redirect(part.url);
      }
    }),
  ],

  part_delete_get: asyncHandler(async (req, res) => {
    const part = await Part.findById(req.params.id)
      .populate("manufacturer")
      .exec();

    res.render("part_delete", {
      part: part,
    });
  }),

  part_delete_post: asyncHandler(async (req, res) => {
    await Part.findByIdAndDelete(req.params.id).exec();
    res.redirect("/catalog/parts");
  }),
};
