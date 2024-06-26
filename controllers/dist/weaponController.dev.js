"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var asyncHandler = require("express-async-handler");

var Weapon = require("../models/weapon");

var Corporation = require("../models/coporation");

var _require = require("express-validator"),
    body = _require.body,
    validationResult = _require.validationResult;

module.exports = {
  //get all weapons
  weapons_list: asyncHandler(function _callee(req, res, next) {
    var allWeapons;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Weapon.find().sort({
              name: 1
            }).exec());

          case 2:
            allWeapons = _context.sent;
            res.render("weapons_list", {
              title: "Weapons",
              weaponsArr: allWeapons
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  }),
  //get arm weapons
  weapons_arms: asyncHandler(function _callee2(req, res, next) {
    var armWeapons;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Weapon.find({
              attached_to: "Arms"
            }).sort({
              name: 1
            }).exec());

          case 2:
            armWeapons = _context2.sent;
            res.render("weapons_list_filtered", {
              title: "Weapons",
              subtitle: "Arms",
              filteredWeapons: armWeapons
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }),
  //get back weapons
  weapons_back: asyncHandler(function _callee3(req, res, next) {
    var backWeapons;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(Weapon.find({
              attached_to: "Back"
            }).sort({
              name: 1
            }).exec());

          case 2:
            backWeapons = _context3.sent;
            res.render("weapons_list_filtered", {
              title: "Weapons",
              subtitle: "Back",
              filteredWeapons: backWeapons
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  }),
  weapon_detail: asyncHandler(function _callee4(req, res) {
    var weapon;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(Weapon.findById(req.params.id).populate("manufacturer").exec());

          case 2:
            weapon = _context4.sent;
            res.render("weapon_detail", {
              title: weapon.name,
              weapon: weapon
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  }),
  weapon_update_get: asyncHandler(function _callee5(req, res) {
    var attachedToEnumArr, partClassEnumArr, attackTypeEnumArr, weaponTypeEnumArr, reloadTypeEnumArr, additionalEffeectsEnumArr, _ref, _ref2, weapon, allCorps;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            attachedToEnumArr = Weapon.schema.path("attached_to").enumValues;
            partClassEnumArr = Weapon.schema.path("part_class").enumValues; //seperate into seperate lists for arms and back??? it would be more accurate to the game

            attackTypeEnumArr = Weapon.schema.path("attack_type").enumValues;
            weaponTypeEnumArr = Weapon.schema.path("weapon_type").enumValues;
            reloadTypeEnumArr = Weapon.schema.path("reload_type").enumValues;
            additionalEffeectsEnumArr = Weapon.schema.path("additional_effects").enumValues;
            _context5.next = 8;
            return regeneratorRuntime.awrap(Promise.all([Weapon.findById(req.params.id).populate("manufacturer").exec(), Corporation.find().sort({
              name: 1
            }).exec()]));

          case 8:
            _ref = _context5.sent;
            _ref2 = _slicedToArray(_ref, 2);
            weapon = _ref2[0];
            allCorps = _ref2[1];
            res.render("weapon_update", {
              title: "Update Weapon",
              weapon: weapon,
              attachedToOptions: attachedToEnumArr,
              partClassOptions: partClassEnumArr,
              attackTypeOptions: attackTypeEnumArr,
              weaponTypeOptions: weaponTypeEnumArr,
              reloadTypeOptions: reloadTypeEnumArr,
              addtionalEffectsOptions: additionalEffeectsEnumArr,
              manufacturerOptions: allCorps
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    });
  }),
  weapon_update_post: [body("weapon_name").toUpperCase().trim().isLength({
    min: 1
  }).withMessage("Name cannot be blank"), asyncHandler(function _callee6(req, res) {
    var errors, attachedToEnumArr, partClassEnumArr, attackTypeEnumArr, weaponTypeEnumArr, reloadTypeEnumArr, additionalEffeectsEnumArr, _ref3, _ref4, weapon, allCorps;

    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            errors = validationResult(req);
            attachedToEnumArr = Weapon.schema.path("attached_to").enumValues;
            partClassEnumArr = Weapon.schema.path("part_class").enumValues; //seperate into seperate lists for arms and back??? it would be more accurate to the game

            attackTypeEnumArr = Weapon.schema.path("attack_type").enumValues;
            weaponTypeEnumArr = Weapon.schema.path("weapon_type").enumValues;
            reloadTypeEnumArr = Weapon.schema.path("reload_type").enumValues;
            additionalEffeectsEnumArr = Weapon.schema.path("additional_effects").enumValues;
            _context6.next = 9;
            return regeneratorRuntime.awrap(Promise.all([Weapon.findById(req.params.id).exec(), Corporation.find().sort({
              name: 1
            }).exec()]));

          case 9:
            _ref3 = _context6.sent;
            _ref4 = _slicedToArray(_ref3, 2);
            weapon = _ref4[0];
            allCorps = _ref4[1];

            if (errors.isEmpty()) {
              _context6.next = 17;
              break;
            }

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
              errors: errors.array()
            });
            _context6.next = 20;
            break;

          case 17:
            _context6.next = 19;
            return regeneratorRuntime.awrap(Weapon.findByIdAndUpdate(req.params.id, {
              name: req.body.weapon_name,
              attached_to: req.body.attached_to_drop,
              part_class: req.body.part_class_drop,
              attack_type: req.body.attack_type_drop,
              weapon_type: req.body.weapon_type_drop,
              reload_type: req.body.reload_type_drop,
              additional_effects: req.body.additional_effects_drop,
              manufacturer: req.body.manufacturers_drop
            }));

          case 19:
            res.redirect(weapon.url);

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    });
  })],
  weapon_create_get: asyncHandler(function _callee7(req, res) {
    var attachedToEnumArr, partClassEnumArr, attackTypeEnumArr, weaponTypeEnumArr, reloadTypeEnumArr, additionalEffeectsEnumArr, allCorps;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            attachedToEnumArr = Weapon.schema.path("attached_to").enumValues;
            partClassEnumArr = Weapon.schema.path("part_class").enumValues; //seperate into seperate lists for arms and back??? it would be more accurate to the game

            attackTypeEnumArr = Weapon.schema.path("attack_type").enumValues;
            weaponTypeEnumArr = Weapon.schema.path("weapon_type").enumValues;
            reloadTypeEnumArr = Weapon.schema.path("reload_type").enumValues;
            additionalEffeectsEnumArr = Weapon.schema.path("additional_effects").enumValues;
            _context7.next = 8;
            return regeneratorRuntime.awrap(Corporation.find().sort({
              name: 1
            }).exec());

          case 8:
            allCorps = _context7.sent;
            res.render("weapon_create", {
              title: "Create New Weapon",
              attachedToOptions: attachedToEnumArr,
              partClassOptions: partClassEnumArr,
              attackTypeOptions: attackTypeEnumArr,
              weaponTypeOptions: weaponTypeEnumArr,
              reloadTypeOptions: reloadTypeEnumArr,
              addtionalEffectsOptions: additionalEffeectsEnumArr,
              manufacturerOptions: allCorps
            });

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    });
  }),
  weapon_create_post: [body("weapon_name").toUpperCase().trim().isLength({
    min: 1
  }).withMessage("Name cannot be blank"), asyncHandler(function _callee8(req, res) {
    var errors, attachedToEnumArr, partClassEnumArr, attackTypeEnumArr, weaponTypeEnumArr, reloadTypeEnumArr, additionalEffeectsEnumArr, allCorps, manufacturer, weapon;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            errors = validationResult(req);
            attachedToEnumArr = Weapon.schema.path("attached_to").enumValues;
            partClassEnumArr = Weapon.schema.path("part_class").enumValues; //seperate into seperate lists for arms and back??? it would be more accurate to the game

            attackTypeEnumArr = Weapon.schema.path("attack_type").enumValues;
            weaponTypeEnumArr = Weapon.schema.path("weapon_type").enumValues;
            reloadTypeEnumArr = Weapon.schema.path("reload_type").enumValues;
            additionalEffeectsEnumArr = Weapon.schema.path("additional_effects").enumValues;
            _context8.next = 9;
            return regeneratorRuntime.awrap(Corporation.find().sort({
              name: 1
            }).exec());

          case 9:
            allCorps = _context8.sent;
            manufacturer = allCorps.find(function (corp) {
              return corp.name === req.body.manufacturer;
            });
            weapon = new Weapon({
              name: req.body.weapon_name,
              attached_to: req.body.attached_to,
              part_class: req.body.part_class,
              attack_type: req.body.attack_type,
              weapon_type: req.body.weapon_type,
              reload_type: req.body.reload_type,
              additional_effects: req.body.additional_effects,
              manufacturer: manufacturer
            });

            if (errors.isEmpty()) {
              _context8.next = 16;
              break;
            }

            res.render("weapon_create", {
              title: "Create New Weapon",
              attachedToOptions: attachedToEnumArr,
              partClassOptions: partClassEnumArr,
              attackTypeOptions: attackTypeEnumArr,
              weaponTypeOptions: weaponTypeEnumArr,
              reloadTypeOptions: reloadTypeEnumArr,
              addtionalEffectsOptions: additionalEffeectsEnumArr,
              manufacturerOptions: allCorps,
              errors: errors.array()
            });
            _context8.next = 21;
            break;

          case 16:
            _context8.next = 18;
            return regeneratorRuntime.awrap(Corporation.findByIdAndUpdate(manufacturer._id, {
              $push: {
                weapons: weapon
              }
            }));

          case 18:
            _context8.next = 20;
            return regeneratorRuntime.awrap(weapon.save());

          case 20:
            res.redirect(weapon.url);

          case 21:
          case "end":
            return _context8.stop();
        }
      }
    });
  })],
  weapon_delete_get: asyncHandler(function _callee9(req, res) {
    var weapon;
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return regeneratorRuntime.awrap(Weapon.findById(req.params.id).exec());

          case 2:
            weapon = _context9.sent;
            res.render("weapon_delete", {
              title: weapon.name,
              weapon: weapon
            });

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    });
  }),
  weapon_delete_post: asyncHandler(function _callee10(req, res) {
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return regeneratorRuntime.awrap(Weapon.findByIdAndDelete(req.params.id).exec());

          case 2:
            res.redirect("/catalog/weapons");

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    });
  })
};