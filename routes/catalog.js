const express = require("express");
const router = express.Router();
const corporation_controller = require("../controllers/corporationController");
const weapon_controller = require("../controllers/weaponController");
const part_controller = require("../controllers/partController");

//CORPORATION ROUTES
router.get("/corporations", corporation_controller.corp_list);
router.get("/corporation/create", corporation_controller.placeholder);
router.get("/corporation/:id", corporation_controller.corp_detail);
router.get("/corporation/:id/update", corporation_controller.placeholder);
router.post("/corporation/:id/update", corporation_controller.placeholder);
router.get("/corporation/:id/delete", corporation_controller.placeholder);
router.post("/corporation/:id/delete", corporation_controller.placeholder);

//WEAPON ROUTES
router.get("/weapons", weapon_controller.weapons_list);
router.get("/weapons/arms", weapon_controller.weapons_arms);
router.get("/weapons/back", weapon_controller.weapons_back);
router.get("/weapon/create", weapon_controller.placeholder);
router.get("/weapon/:id", weapon_controller.placeholder);
router.get("/weapon/:id/update", weapon_controller.placeholder);
router.post("/weapon/:id/update", weapon_controller.placeholder);
router.get("/weapon/:id/delete", weapon_controller.placeholder);
router.post("/weapon/:id/delete", weapon_controller.placeholder);

//PARTS ROUTES
router.get("/parts", part_controller.parts_list);
router.get("/parts/head", part_controller.placeholder);
router.get("/parts/body", part_controller.placeholder);
router.get("/parts/arms", part_controller.placeholder);
router.get("/parts/legs", part_controller.placeholder);
router.get("/parts/boosters", part_controller.placeholder);
router.get("/parts/fcs", part_controller.placeholder);
router.get("/parts/generators", part_controller.placeholder);
router.get("/part/create", part_controller.placeholder);
router.get("/part/:id", part_controller.placeholder);
router.get("/part/:id/update", part_controller.placeholder);
router.post("/part/:id/update", part_controller.placeholder);
router.get("/part/:id/delete", part_controller.placeholder);
router.post("/part/:id/delete", part_controller.placeholder);

module.exports = router;
