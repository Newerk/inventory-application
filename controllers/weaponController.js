const asyncHandler = require("express-async-handler");
const Weapon = require("../models/weapon");
const Corporation = require("../models/coporation");
const { body, validationResult } = require("express-validator");

module.exports = {
  //get all weapons
  weapons_list: asyncHandler(async (req, res, next) => {
    const allWeapons = await Weapon.find().sort({ name: 1 }).exec();

    res.render("weapons_list", {
      title: "Weapons",
      weaponsArr: allWeapons,
    });
  }),

  //get arm weapons
  weapons_arms: asyncHandler(async (req, res, next) => {
    const armWeapons = await Weapon.find({ attached_to: "Arms" })
      .sort({ name: 1 })
      .exec();

    res.render("weapons_list_filtered", {
      title: "Weapons",
      subtitle: "Arms",
      filteredWeapons: armWeapons,
    });
  }),

  //get back weapons
  weapons_back: asyncHandler(async (req, res, next) => {
    const backWeapons = await Weapon.find({ attached_to: "Back" })
      .sort({ name: 1 })
      .exec();

    res.render("weapons_list_filtered", {
      title: "Weapons",
      subtitle: "Back",
      filteredWeapons: backWeapons,
    });
  }),

  weapon_detail: asyncHandler(async (req, res) => {
    const weapon = await Weapon.findById(req.params.id)
      .populate("manufacturer")
      .exec();

    res.render("weapon_detail", {
      title: weapon.name,
      weapon: weapon,
    });
  }),

  weapon_update_get: asyncHandler(async (req, res) => {
    const attachedToEnumArr = Weapon.schema.path("attached_to").enumValues;
    const partClassEnumArr = Weapon.schema.path("part_class").enumValues; //seperate into seperate lists for arms and back??? it would be more accurate to the game
    const attackTypeEnumArr = Weapon.schema.path("attack_type").enumValues;
    const weaponTypeEnumArr = Weapon.schema.path("weapon_type").enumValues;
    const reloadTypeEnumArr = Weapon.schema.path("reload_type").enumValues;
    const additionalEffeectsEnumArr =
      Weapon.schema.path("additional_effects").enumValues;

    const [weapon, allCorps] = await Promise.all([
      Weapon.findById(req.params.id).populate("manufacturer").exec(),
      Corporation.find().sort({ name: 1 }).exec(),
    ]);

    res.render("weapon_update", {
      title: "Update Weapon",
      weapon: weapon,
      attachedToOptions: attachedToEnumArr,
      partClassOptions: partClassEnumArr,
      attackTypeOptions: attackTypeEnumArr,
      weaponTypeOptions: weaponTypeEnumArr,
      reloadTypeOptions: reloadTypeEnumArr,
      addtionalEffectsOptions: additionalEffeectsEnumArr,
      manufacturerOptions: allCorps,
    });
  }),

  weapon_update_post: [
    body("weapon_name")
      .toUpperCase()
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name cannot be blank"),

    asyncHandler(async (req, res) => {
      const errors = validationResult(req);

      const attachedToEnumArr = Weapon.schema.path("attached_to").enumValues;
      const partClassEnumArr = Weapon.schema.path("part_class").enumValues; //seperate into seperate lists for arms and back??? it would be more accurate to the game
      const attackTypeEnumArr = Weapon.schema.path("attack_type").enumValues;
      const weaponTypeEnumArr = Weapon.schema.path("weapon_type").enumValues;
      const reloadTypeEnumArr = Weapon.schema.path("reload_type").enumValues;
      const additionalEffeectsEnumArr =
        Weapon.schema.path("additional_effects").enumValues;

      const [weapon, allCorps] = await Promise.all([
        Weapon.findById(req.params.id).exec(),
        Corporation.find().sort({ name: 1 }).exec(),
      ]);

      if (!errors.isEmpty()) {
        res.render("weapon_update", {
          title: "Update Weapon",
          weapon: weapon,
          attachedToOptions: attachedToEnumArr,
          partClassOptions: partClassEnumArr,
          attackTypeOptions: attackTypeEnumArr,
          weaponTypeOptions: weaponTypeEnumArr,
          reloadTypeOptions: reloadTypeEnumArr,
          addtionalEffectsOptions: additionalEffeectsEnumArr,
          manufacturerOptions: allCorps,
          errors: errors.array(),
        });
      } else {
        await Weapon.findByIdAndUpdate(req.params.id, {
          name: req.body.weapon_name,
          attached_to: req.body.attached_to_drop,
          part_class: req.body.part_class_drop,
          attack_type: req.body.attack_type_drop,
          weapon_type: req.body.weapon_type_drop,
          reload_type: req.body.reload_type_drop,
          additional_effects: req.body.additional_effects_drop,
          manufacturer: req.body.manufacturers_drop,
        });
        res.redirect(weapon.url);
      }
    }),
  ],

  weapon_create_get: asyncHandler(async (req, res) => {
    const attachedToEnumArr = Weapon.schema.path("attached_to").enumValues;
    const partClassEnumArr = Weapon.schema.path("part_class").enumValues; //seperate into seperate lists for arms and back??? it would be more accurate to the game
    const attackTypeEnumArr = Weapon.schema.path("attack_type").enumValues;
    const weaponTypeEnumArr = Weapon.schema.path("weapon_type").enumValues;
    const reloadTypeEnumArr = Weapon.schema.path("reload_type").enumValues;
    const additionalEffeectsEnumArr =
      Weapon.schema.path("additional_effects").enumValues;
    const allCorps = await Corporation.find().sort({ name: 1 }).exec();

    res.render("weapon_create", {
      title: "Create New Weapon",
      attachedToOptions: attachedToEnumArr,
      partClassOptions: partClassEnumArr,
      attackTypeOptions: attackTypeEnumArr,
      weaponTypeOptions: weaponTypeEnumArr,
      reloadTypeOptions: reloadTypeEnumArr,
      addtionalEffectsOptions: additionalEffeectsEnumArr,
      manufacturerOptions: allCorps,
    });
  }),

  weapon_create_post: [
    body("weapon_name")
      .toUpperCase()
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name cannot be blank"),

    asyncHandler(async (req, res) => {
      const errors = validationResult(req);

      const attachedToEnumArr = Weapon.schema.path("attached_to").enumValues;
      const partClassEnumArr = Weapon.schema.path("part_class").enumValues; //seperate into seperate lists for arms and back??? it would be more accurate to the game
      const attackTypeEnumArr = Weapon.schema.path("attack_type").enumValues;
      const weaponTypeEnumArr = Weapon.schema.path("weapon_type").enumValues;
      const reloadTypeEnumArr = Weapon.schema.path("reload_type").enumValues;
      const additionalEffeectsEnumArr =
        Weapon.schema.path("additional_effects").enumValues;

      const allCorps = await Corporation.find().sort({ name: 1 }).exec();

      const manufacturer = allCorps.find(
        (corp) => corp.name === req.body.manufacturer
      );

      const weapon = new Weapon({
        name: req.body.weapon_name,
        attached_to: req.body.attached_to,
        part_class: req.body.part_class,
        attack_type: req.body.attack_type,
        weapon_type: req.body.weapon_type,
        reload_type: req.body.reload_type,
        additional_effects: req.body.additional_effects,
        manufacturer: manufacturer,
      });

      if (!errors.isEmpty()) {
        res.render("weapon_create", {
          title: "Create New Weapon",
          attachedToOptions: attachedToEnumArr,
          partClassOptions: partClassEnumArr,
          attackTypeOptions: attackTypeEnumArr,
          weaponTypeOptions: weaponTypeEnumArr,
          reloadTypeOptions: reloadTypeEnumArr,
          addtionalEffectsOptions: additionalEffeectsEnumArr,
          manufacturerOptions: allCorps,
          errors: errors.array(),
        });
      } else {
        await Corporation.findByIdAndUpdate(manufacturer._id, {
          $push: {
            weapons: weapon,
          },
        });
        await weapon.save();
        res.redirect(weapon.url);
      }
    }),
  ],
  weapon_delete_get: asyncHandler(async (req, res) => {
    const weapon = await Weapon.findById(req.params.id).exec();

    res.render("weapon_delete", {
      title: weapon.name,
      weapon: weapon,
    });
  }),
  weapon_delete_post: asyncHandler(async (req, res) => {
    await Weapon.findByIdAndDelete(req.params.id).exec();
    res.redirect("/catalog/weapons");
  }),
};
