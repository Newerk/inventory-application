"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var asyncHandler = require("express-async-handler");

var Part = require("../models/part");

var Corporation = require("../models/coporation");

var _require = require("express-validator"),
    body = _require.body,
    validationResult = _require.validationResult;

module.exports = {
  //get all parts
  parts_list: asyncHandler(function _callee(req, res) {
    var allParts;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Part.find().sort({
              name: 1
            }).exec());

          case 2:
            allParts = _context.sent;
            res.render("parts_list", {
              title: "Parts",
              partsArr: allParts
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  }),
  //get part details
  parts_detail: asyncHandler(function _callee2(req, res) {
    var part;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Part.findById(req.params.id).populate("manufacturer").exec());

          case 2:
            part = _context2.sent;
            res.render("part_detail", {
              part: part
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }),
  //get head parts
  parts_head: asyncHandler(function _callee3(req, res) {
    var headParts;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(Part.find({
              part_type: "Head"
            }).sort({
              name: 1
            }).exec());

          case 2:
            headParts = _context3.sent;
            res.render("parts_list_filtered", {
              title: "Parts",
              subtitle: "Head",
              filteredParts: headParts
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  }),
  //get body parts
  parts_body: asyncHandler(function _callee4(req, res) {
    var bodyParts;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(Part.find({
              part_type: "Body"
            }).sort({
              name: 1
            }).exec());

          case 2:
            bodyParts = _context4.sent;
            res.render("parts_list_filtered", {
              title: "Parts",
              subtitle: "Body",
              filteredParts: bodyParts
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  }),
  //get arms parts
  parts_arms: asyncHandler(function _callee5(req, res) {
    var armParts;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(Part.find({
              part_type: "Arms"
            }).sort({
              name: 1
            }).exec());

          case 2:
            armParts = _context5.sent;
            res.render("parts_list_filtered", {
              title: "Parts",
              subtitle: "Arms",
              filteredParts: armParts
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  }),
  //get legs parts
  parts_legs: asyncHandler(function _callee6(req, res) {
    var legParts;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(Part.find({
              part_type: "Legs"
            }).sort({
              name: 1
            }).exec());

          case 2:
            legParts = _context6.sent;
            res.render("parts_list_filtered", {
              title: "Parts",
              subtitle: "Legs",
              filteredParts: legParts
            });

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    });
  }),
  //get boosters parts
  parts_boosters: asyncHandler(function _callee7(req, res) {
    var boosterParts;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return regeneratorRuntime.awrap(Part.find({
              part_type: "Boosters"
            }).sort({
              name: 1
            }).exec());

          case 2:
            boosterParts = _context7.sent;
            res.render("parts_list_filtered", {
              title: "Parts",
              subtitle: "Booster",
              filteredParts: boosterParts
            });

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    });
  }),
  //get fcs parts
  parts_fcs: asyncHandler(function _callee8(req, res) {
    var fcsParts;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return regeneratorRuntime.awrap(Part.find({
              part_type: "FCS"
            }).sort({
              name: 1
            }).exec());

          case 2:
            fcsParts = _context8.sent;
            res.render("parts_list_filtered", {
              title: "Parts",
              subtitle: "FCS",
              filteredParts: fcsParts
            });

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    });
  }),
  //get generator parts
  parts_generator: asyncHandler(function _callee9(req, res) {
    var generatorParts;
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return regeneratorRuntime.awrap(Part.find({
              part_type: "Generator"
            }).sort({
              name: 1
            }).exec());

          case 2:
            generatorParts = _context9.sent;
            res.render("parts_list_filtered", {
              title: "Parts",
              subtitle: "Generator",
              filteredParts: generatorParts
            });

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    });
  }),
  part_create_get: asyncHandler(function _callee10(req, res) {
    var partTypeEnumArr, manufacturerOptions;
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            partTypeEnumArr = Part.schema.path("part_type").enumValues;
            _context10.next = 3;
            return regeneratorRuntime.awrap(Corporation.find().sort({
              name: 1
            }).exec());

          case 3:
            manufacturerOptions = _context10.sent;
            res.render("part_create", {
              title: "Create New Part",
              partTypeOptions: partTypeEnumArr,
              manufacturerOptions: manufacturerOptions
            });

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    });
  }),
  part_create_post: [body("part_name").toUpperCase().trim().isLength({
    min: 1
  }).withMessage("Name cannot be blank"), asyncHandler(function _callee11(req, res) {
    var errors, manufacturer, partTypeEnumArr, manufacturerOptions, part;
    return regeneratorRuntime.async(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            errors = validationResult(req);
            _context11.next = 3;
            return regeneratorRuntime.awrap(Corporation.findOne({
              name: req.body.manufacturer
            }).exec());

          case 3:
            manufacturer = _context11.sent;
            partTypeEnumArr = Part.schema.path("part_type").enumValues;
            _context11.next = 7;
            return regeneratorRuntime.awrap(Corporation.find().sort({
              name: 1
            }).exec());

          case 7:
            manufacturerOptions = _context11.sent;
            part = new Part({
              name: req.body.part_name,
              part_type: req.body.part_type,
              manufacturer: manufacturer
            });

            if (errors.isEmpty()) {
              _context11.next = 14;
              break;
            }

            res.render("part_create", {
              title: "Create New Part",
              partTypeOptions: partTypeEnumArr,
              manufacturerOptions: manufacturerOptions,
              errors: errors.array()
            });
            return _context11.abrupt("return");

          case 14:
            _context11.next = 16;
            return regeneratorRuntime.awrap(Corporation.findByIdAndUpdate(manufacturer._id, {
              $push: {
                parts: part
              }
            }));

          case 16:
            _context11.next = 18;
            return regeneratorRuntime.awrap(part.save());

          case 18:
            res.redirect(part.url);

          case 19:
          case "end":
            return _context11.stop();
        }
      }
    });
  })],
  part_update_get: asyncHandler(function _callee12(req, res) {
    var partTypeEnumArr, _ref, _ref2, part, allCorps;

    return regeneratorRuntime.async(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            partTypeEnumArr = Part.schema.path("part_type").enumValues;
            _context12.next = 3;
            return regeneratorRuntime.awrap(Promise.all([Part.findById(req.params.id).populate("manufacturer").exec(), Corporation.find().sort({
              name: 1
            }).exec()]));

          case 3:
            _ref = _context12.sent;
            _ref2 = _slicedToArray(_ref, 2);
            part = _ref2[0];
            allCorps = _ref2[1];
            res.render("part_update", {
              title: "Update Part",
              part: part,
              partTypeOptions: partTypeEnumArr,
              manufacturerOptions: allCorps
            });

          case 8:
          case "end":
            return _context12.stop();
        }
      }
    });
  }),
  part_update_post: [body("part_name").toUpperCase().trim().isLength({
    min: 1
  }).withMessage("Name cannot be blank"), asyncHandler(function _callee13(req, res) {
    var errors, partTypeEnumArr, _ref3, _ref4, part, allCorps;

    return regeneratorRuntime.async(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            errors = validationResult(req);
            partTypeEnumArr = Part.schema.path("part_type").enumValues;
            _context13.next = 4;
            return regeneratorRuntime.awrap(Promise.all([Part.findById(req.params.id).populate("manufacturer").exec(), Corporation.find().sort({
              name: 1
            }).exec()]));

          case 4:
            _ref3 = _context13.sent;
            _ref4 = _slicedToArray(_ref3, 2);
            part = _ref4[0];
            allCorps = _ref4[1];

            if (errors.isEmpty()) {
              _context13.next = 12;
              break;
            }

            res.render("part_update", {
              title: "Update Part",
              part: part,
              partTypeOptions: partTypeEnumArr,
              manufacturerOptions: allCorps,
              errors: errors.array()
            });
            _context13.next = 15;
            break;

          case 12:
            _context13.next = 14;
            return regeneratorRuntime.awrap(Part.findByIdAndUpdate(req.params.id, {
              name: req.body.part_name,
              part_type: req.body.part_type_drop,
              manufacturer: req.body.manufacturers_drop
            }));

          case 14:
            res.redirect(part.url);

          case 15:
          case "end":
            return _context13.stop();
        }
      }
    });
  })],
  part_delete_get: asyncHandler(function _callee14(req, res) {
    var part;
    return regeneratorRuntime.async(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return regeneratorRuntime.awrap(Part.findById(req.params.id).populate("manufacturer").exec());

          case 2:
            part = _context14.sent;
            res.render("part_delete", {
              part: part
            });

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    });
  }),
  part_delete_post: asyncHandler(function _callee15(req, res) {
    return regeneratorRuntime.async(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return regeneratorRuntime.awrap(Part.findByIdAndDelete(req.params.id).exec());

          case 2:
            res.redirect("/catalog/parts");

          case 3:
          case "end":
            return _context15.stop();
        }
      }
    });
  })
};