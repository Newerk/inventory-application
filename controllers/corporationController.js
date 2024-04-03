const asyncHandler = require("express-async-handler");
const Corporation = require("../models/coporation");
const Weapon = require("../models/weapon");
const Part = require("../models/part");
const { body, validationResult } = require("express-validator");
const express = require("express");

module.exports = {
  placeholder: asyncHandler(async (req, res) => {
    //placeholder
    res.render("index", {
      title: "Welcome to The Parts Shop 621",
    });
  }),

  //get all corporations
  corp_list: asyncHandler(async (req, res) => {
    const allCorps = await Corporation.find().sort({ name: 1 }).exec();

    res.render("corp_list", {
      title: "Corporations",
      corporations: allCorps,
    });
  }),

  //get details of selected corporation
  corp_detail: asyncHandler(async (req, res) => {
    const corp = await Corporation.findById(req.params.id)
      .populate("weapons")
      .populate("parts")
      .exec();

    res.render("corp_detail", {
      title: corp.name,
      weapons: corp.weapons,
      parts: corp.parts,
      corp: corp,
    });
  }),

  corp_create_get: asyncHandler(async (req, res) => {
    res.render("corp_create", {
      title: "Create New Corporation",
    });
  }),

  corp_create_post: [
    body("corp_name")
      .toUpperCase()
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name cannot be blank"),

    asyncHandler(async (req, res) => {
      const errors = validationResult(req);

      const corp = new Corporation({
        name: req.body.corp_name,
      });

      if (!errors.isEmpty()) {
        res.render("corp_create", {
          title: "Create New Corporation",
          corp: corp,
          errors: errors.array(),
        });
        return;
      } else {
        await corp.save();
        res.redirect(corp.url);
      }
    }),
  ],

  corp_update_get: asyncHandler(async (req, res) => {
    const corp = await Corporation.findById(req.params.id)
      .populate("weapons")
      .populate("parts")
      .exec();

    res.render("corp_update", {
      title: "Update Corporation",
      initialName: corp.name,
    });
  }),

  corp_update_post: [
    body("corp_name")
      .toUpperCase()
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name cannot be blank"),

    asyncHandler(async (req, res) => {
      const errors = validationResult(req);
      const corp = await Corporation.findById(req.params.id).exec();

      if (!errors.isEmpty()) {
        res.render("corp_update", {
          title: "Update Corporation",
          initialName: corp.name,
          errors: errors.array(),
        });
      } else {
        const corp = await Corporation.findByIdAndUpdate(req.params.id, {
          name: req.body.corp_name,
        }).exec();

        await corp.save();
        res.redirect(corp.url);
      }
    }),
  ],

  corp_delete_get: asyncHandler(async (req, res) => {
    const corp = await Corporation.findById(req.params.id)
      .populate("weapons")
      .populate("parts")
      .exec();

    res.render("corp_delete", {
      title: corp.name,
      totalWeapons: corp.weapons.length,
      totalParts: corp.parts.length,
      corp: corp,
    });
  }),

  corp_delete_post: [
    asyncHandler(async (req, res) => {
      await Corporation.findByIdAndDelete(req.params.id);
      res.redirect("/catalog/corporations");
    }),
  ],
};
