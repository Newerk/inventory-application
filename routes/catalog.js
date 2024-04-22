const express = require("express");
const router = express.Router();
const corporation_controller = require("../controllers/corporationController");
const weapon_controller = require("../controllers/weaponController");
const part_controller = require("../controllers/partController");
const asyncHandler = require("express-async-handler");
const Coporation = require("../models/coporation");
const Weapon = require("../models/weapon");
const Part = require("../models/part");

//HOMEPAGE
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const [totalCorps, totalWeapons, totalParts] = await Promise.all([
      Coporation.find().exec(),
      Weapon.find().exec(),
      Part.find().exec(),
    ]);

    res.render("index", {
      title: "Welcome to The Shop, 621",
      totalCorps: totalCorps.length,
      totalWeapons: totalWeapons.length,
      totalParts: totalParts.length,
    });
  })
);

//CORPORATION ROUTES
router.get("/corporations", corporation_controller.corp_list);
router.get("/corporation/create", corporation_controller.corp_create_get);
router.post("/corporation/create", corporation_controller.corp_create_post);
router.get("/corporation/:id", corporation_controller.corp_detail);
router.get("/corporation/:id/update", corporation_controller.corp_update_get);
router.post("/corporation/:id/update", corporation_controller.corp_update_post);
router.get("/corporation/:id/delete", corporation_controller.corp_delete_get);
router.post("/corporation/:id/delete", corporation_controller.corp_delete_post);

//WEAPON ROUTES
router.get("/weapons", weapon_controller.weapons_list);
router.get("/weapons/arms", weapon_controller.weapons_arms);
router.get("/weapons/back", weapon_controller.weapons_back);
router.get("/weapon/create", weapon_controller.weapon_create_get);
router.post("/weapon/create", weapon_controller.weapon_create_post);
router.get("/weapon/:id", weapon_controller.weapon_detail);
router.get("/weapon/:id/update", weapon_controller.weapon_update_get);
router.post("/weapon/:id/update", weapon_controller.weapon_update_post);
router.get("/weapon/:id/delete", weapon_controller.weapon_delete_get);
router.post("/weapon/:id/delete", weapon_controller.weapon_delete_post);

//PARTS ROUTES
router.get("/parts", part_controller.parts_list);
router.get("/parts/head", part_controller.parts_head);
router.get("/parts/body", part_controller.parts_body);
router.get("/parts/arms", part_controller.parts_arms);
router.get("/parts/legs", part_controller.parts_legs);
router.get("/parts/boosters", part_controller.parts_boosters);
router.get("/parts/fcs", part_controller.parts_fcs);
router.get("/parts/generators", part_controller.parts_generator);
router.get("/part/create", part_controller.part_create_get);
router.post("/part/create", part_controller.part_create_post);
router.get("/part/:id", part_controller.parts_detail);
router.get("/part/:id/update", part_controller.part_update_get);
router.post("/part/:id/update", part_controller.part_update_post);
router.get("/part/:id/delete", part_controller.part_delete_get);
router.post("/part/:id/delete", part_controller.part_delete_post);

module.exports = router;
