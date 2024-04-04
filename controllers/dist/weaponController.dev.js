"use strict";

var asyncHandler = require("express-async-handler");

var Weapon = require("../models/weapon");

module.exports = {
  placeholder: asyncHandler(function _callee(req, res, next) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //placeholder
            res.render("index", {
              title: "Welcome to The Parts Shop 621"
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }),
  //get all weapons
  weapons_list: asyncHandler(function _callee2(req, res, next) {
    var allWeapons;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Weapon.find().sort({
              name: 1
            }).exec());

          case 2:
            allWeapons = _context2.sent;
            res.render("weapons_list", {
              title: "Weapons",
              weaponsArr: allWeapons
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }),
  //get arm weapons
  weapons_arms: asyncHandler(function _callee3(req, res, next) {
    var armWeapons;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(Weapon.find({
              attached_to: "Arms"
            }).sort({
              name: 1
            }).exec());

          case 2:
            armWeapons = _context3.sent;
            res.render("weapons_list_filtered", {
              title: "Weapons",
              subtitle: "Arm Weapons",
              filteredWeapons: armWeapons
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  }),
  //get back weapons
  weapons_back: asyncHandler(function _callee4(req, res, next) {
    var backWeapons;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(Weapon.find({
              attached_to: "Back"
            }).sort({
              name: 1
            }).exec());

          case 2:
            backWeapons = _context4.sent;
            res.render("weapons_list_filtered", {
              title: "Weapons",
              subtitle: "Back Weapons",
              filteredWeapons: backWeapons
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  }),
  weapon_detail: asyncHandler(function _callee5(req, res) {
    var weapon;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(Weapon.findById(req.params.id).exec());

          case 2:
            weapon = _context5.sent;
            res.render("weapon_detail", {
              title: weapon.name,
              weapon: weapon
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  }),
  weapon_update_get: asyncHandler(function _callee6(req, res) {
    var attachedToEnumArr, partClassEnumArr, attackTypeEnumArr, weaponTypeEnumArr, reloadTypeEnumArr, additionalEffeectsEnumArr, weapon;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            attachedToEnumArr = Weapon.schema.path("attached_to").enumValues;
            partClassEnumArr = Weapon.schema.path("part_class").enumValues; //seperate into seperate lists for arms and back??? it would be more accurate to the game

            attackTypeEnumArr = Weapon.schema.path("attack_type").enumValues;
            weaponTypeEnumArr = Weapon.schema.path("weapon_type").enumValues;
            reloadTypeEnumArr = Weapon.schema.path("reload_type").enumValues;
            additionalEffeectsEnumArr = Weapon.schema.path("additional_effects").enumValues;
            _context6.next = 8;
            return regeneratorRuntime.awrap(Weapon.findById(req.params.id).exec());

          case 8:
            weapon = _context6.sent;
            res.render("weapon_update", {
              title: "Update Weapon",
              weapon: weapon,
              attachedToOptions: attachedToEnumArr,
              partClassOptions: partClassEnumArr,
              attackTypeOptions: attackTypeEnumArr,
              weaponTypeOptions: weaponTypeEnumArr,
              reloadTypeOptions: reloadTypeEnumArr,
              addtionalEffectsOptions: additionalEffeectsEnumArr
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    });
  }),
  weapon_update_post: asyncHandler(function _callee7(req, res) {
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
          case "end":
            return _context7.stop();
        }
      }
    });
  })
};