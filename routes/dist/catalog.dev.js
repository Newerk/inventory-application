"use strict";

var express = require("express");

var router = express.Router();

var corporation_controller = require("../controllers/corporationController");

var weapon_controller = require("../controllers/weaponController");

var part_controller = require("../controllers/partController");

var asyncHandler = require("express-async-handler"); //HOMEPAGE


router.get("/", //placeholder
asyncHandler(function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render("index", {
            title: "Welcome to The Shop 621"
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
})); //CORPORATION ROUTES

router.get("/corporations", corporation_controller.corp_list);
router.get("/corporation/create", corporation_controller.corp_create_get);
router.post("/corporation/create", corporation_controller.corp_create_post);
router.get("/corporation/:id", corporation_controller.corp_detail);
router.get("/corporation/:id/update", corporation_controller.corp_update_get);
router.post("/corporation/:id/update", corporation_controller.corp_update_post);
router.get("/corporation/:id/delete", corporation_controller.corp_delete_get);
router.post("/corporation/:id/delete", corporation_controller.corp_delete_post); //WEAPON ROUTES

router.get("/weapons", weapon_controller.weapons_list);
router.get("/weapons/arms", weapon_controller.weapons_arms);
router.get("/weapons/back", weapon_controller.weapons_back);
router.get("/weapon/create", weapon_controller.weapon_create_get);
router.post("/weapon/create", weapon_controller.weapon_create_post);
router.get("/weapon/:id", weapon_controller.weapon_detail);
router.get("/weapon/:id/update", weapon_controller.weapon_update_get);
router.post("/weapon/:id/update", weapon_controller.weapon_update_post);
router.get("/weapon/:id/delete", weapon_controller.weapon_delete_get);
router.post("/weapon/:id/delete", weapon_controller.weapon_delete_post); //PARTS ROUTES

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