const asyncHandler = require("express-async-handler");
const Weapon = require("../models/weapon");

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
      subtitle: "Arm Weapons",
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
      subtitle: "Back Weapons",
      filteredWeapons: backWeapons,
    });
  }),

  weapon_detail: asyncHandler(async (req, res) => {
    const weapon = await Weapon.findById(req.params.id).exec();

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

    const weapon = await Weapon.findById(req.params.id).exec();

    res.render("weapon_update", {
      title: "Update Weapon",
      weapon: weapon,
      attachedToOptions: attachedToEnumArr,
      partClassOptions: partClassEnumArr,
      attackTypeOptions: attackTypeEnumArr,
      weaponTypeOptions: weaponTypeEnumArr,
      reloadTypeOptions: reloadTypeEnumArr,
      addtionalEffectsOptions: additionalEffeectsEnumArr,
    });
  }),

  weapon_update_post: asyncHandler(async (req, res) => {}),
};
