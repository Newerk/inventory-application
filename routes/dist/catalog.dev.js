"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var express = require("express");

var router = express.Router();

var corporation_controller = require("../controllers/corporationController");

var weapon_controller = require("../controllers/weaponController");

var part_controller = require("../controllers/partController");

var asyncHandler = require("express-async-handler");

var Coporation = require("../models/coporation");

var Weapon = require("../models/weapon");

var Part = require("../models/part"); //HOMEPAGE


router.get("/", //placeholder
asyncHandler(function _callee(req, res) {
  var _ref, _ref2, totalCorps, totalWeapons, totalParts;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Promise.all([Coporation.find().exec(), Weapon.find().exec(), Part.find().exec()]));

        case 2:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 3);
          totalCorps = _ref2[0];
          totalWeapons = _ref2[1];
          totalParts = _ref2[2];
          res.render("index", {
            title: "Welcome to The Shop, 621",
            totalCorps: totalCorps.length,
            totalWeapons: totalWeapons.length,
            totalParts: totalParts.length
          });

        case 8:
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