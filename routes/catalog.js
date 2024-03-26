const express = require("express");
const router = express.Router();
const Corporation = require("../controllers/corporationController");
const Weapon = require("../controllers/weaponController");
const Part = require("../controllers/partController");

//CORPORATION ROUTES
router.get("/corporations", Corporation.corp_list);
router.get("/corporation/create", Corporation.placeholder);
router.get("/corporation/:id", Corporation.placeholder);
router.get("/corporation/:id/update", Corporation.placeholder);
router.post("/corporation/:id/update", Corporation.placeholder);
router.get("/corporation/:id/delete", Corporation.placeholder);
router.post("/corporation/:id/delete", Corporation.placeholder);

//WEAPON ROUTES
router.get("/weapons", Weapon.weapons_list);
router.get("/weapons/arms", Weapon.weapons_arms);
router.get("/weapons/back", Weapon.weapons_back);
router.get("/weapon/create", Weapon.placeholder);
router.get("/weapon/:id", Weapon.placeholder);
router.get("/weapon/:id/update", Weapon.placeholder);
router.post("/weapon/:id/update", Weapon.placeholder);
router.get("/weapon/:id/delete", Weapon.placeholder);
router.post("/weapon/:id/delete", Weapon.placeholder);

//PARTS ROUTES
router.get("/parts", Part.parts_list);
router.get("/parts/head", Part.placeholder);
router.get("/parts/body", Part.placeholder);
router.get("/parts/arms", Part.placeholder);
router.get("/parts/legs", Part.placeholder);
router.get("/parts/boosters", Part.placeholder);
router.get("/parts/fcs", Part.placeholder);
router.get("/parts/generators", Part.placeholder);
router.get("/part/create", Part.placeholder);
router.get("/part/:id", Part.placeholder);
router.get("/part/:id/update", Part.placeholder);
router.post("/part/:id/update", Part.placeholder);
router.get("/part/:id/delete", Part.placeholder);
router.post("/part/:id/delete", Part.placeholder);

module.exports = router;
