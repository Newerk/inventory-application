"use strict";

var asyncHandler = require("express-async-handler");

var Corporation = require("../models/coporation");

var Weapon = require("../models/weapon");

var Part = require("../models/part");

var _require = require("express-validator"),
    body = _require.body,
    validationResult = _require.validationResult;

var express = require("express");

module.exports = {
  placeholder: asyncHandler(function _callee(req, res) {
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
  //get all corporations
  corp_list: asyncHandler(function _callee2(req, res) {
    var allCorps;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Corporation.find().sort({
              name: 1
            }).exec());

          case 2:
            allCorps = _context2.sent;
            res.render("corp_list", {
              title: "Corporations",
              corporations: allCorps
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }),
  //get details of selected corporation
  corp_detail: asyncHandler(function _callee3(req, res) {
    var corp;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(Corporation.findById(req.params.id).populate("weapons").populate("parts").exec());

          case 2:
            corp = _context3.sent;
            res.render("corp_detail", {
              title: corp.name,
              weapons: corp.weapons,
              parts: corp.parts,
              corp: corp
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  }),
  corp_create_get: asyncHandler(function _callee4(req, res) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res.render("corp_create", {
              title: "Create New Corporation"
            });

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    });
  }),
  corp_create_post: [body("corp_name").toUpperCase().trim().isLength({
    min: 1
  }).withMessage("Name cannot be blank"), asyncHandler(function _callee5(req, res) {
    var errors, corp;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            errors = validationResult(req);
            corp = new Corporation({
              name: req.body.corp_name
            });

            if (errors.isEmpty()) {
              _context5.next = 7;
              break;
            }

            res.render("corp_create", {
              title: "Create New Corporation",
              corp: corp,
              errors: errors.array()
            });
            return _context5.abrupt("return");

          case 7:
            _context5.next = 9;
            return regeneratorRuntime.awrap(corp.save());

          case 9:
            res.redirect(corp.url);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    });
  })],
  corp_update_get: asyncHandler(function _callee6(req, res) {
    var corp;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(Corporation.findById(req.params.id).populate("weapons").populate("parts").exec());

          case 2:
            corp = _context6.sent;
            res.render("corp_update", {
              title: "Update Corporation",
              initialName: corp.name
            });

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    });
  }),
  corp_update_post: [body("corp_name").toUpperCase().trim().isLength({
    min: 1
  }).withMessage("Name cannot be blank"), asyncHandler(function _callee7(req, res) {
    var errors, corp, _corp;

    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            errors = validationResult(req);
            _context7.next = 3;
            return regeneratorRuntime.awrap(Corporation.findById(req.params.id).exec());

          case 3:
            corp = _context7.sent;

            if (errors.isEmpty()) {
              _context7.next = 8;
              break;
            }

            res.render("corp_update", {
              title: "Update Corporation",
              initialName: corp.name,
              errors: errors.array()
            });
            _context7.next = 14;
            break;

          case 8:
            _context7.next = 10;
            return regeneratorRuntime.awrap(Corporation.findByIdAndUpdate(req.params.id, {
              name: req.body.corp_name
            }).exec());

          case 10:
            _corp = _context7.sent;
            _context7.next = 13;
            return regeneratorRuntime.awrap(_corp.save());

          case 13:
            res.redirect(_corp.url);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    });
  })],
  corp_delete_get: asyncHandler(function _callee8(req, res) {
    var corp;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return regeneratorRuntime.awrap(Corporation.findById(req.params.id).populate("weapons").populate("parts").exec());

          case 2:
            corp = _context8.sent;
            res.render("corp_delete", {
              title: corp.name,
              totalWeapons: corp.weapons.length,
              totalParts: corp.parts.length,
              corp: corp
            });

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    });
  }),
  corp_delete_post: [asyncHandler(function _callee9(req, res) {
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return regeneratorRuntime.awrap(Corporation.findByIdAndDelete(req.params.id));

          case 2:
            res.redirect("/catalog/corporations");

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    });
  })]
};