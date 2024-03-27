#! /usr/bin/env node

console.log(
  'This script populates corporations, weapons, and parts to the database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Corporation = require("./models/coporation");
const Weapon = require("./models/weapon");
const Part = require("./models/part");
const params = require("./DB_CREATE_PARAMS");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCorporation();
  await createWeapons();
  await createParts();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// corp[0] will always be the Company ARQUEBUS, regardless of the order
// in which the elements of promise.all's argument complete.
async function corporationCreate(name) {
  const corp = new Corporation({
    name: name,
    weapons: await Weapon.find({ manufacturer: name }).sort(1),
    parts: await Part.find({ manufacturer: name }).sort(1),
  });

  await corp.save();
  console.log(`Added corp: ${name}`);
}

async function weaponCreate(
  name,
  attached_to,
  part_class,
  attack_type,
  weapon_type,
  reload_type,
  additional_effects,
  manufacturer
) {
  const weaponDetail = {
    name: name,
    attached_to: attached_to,
    part_class: part_class,
    attack_type: attack_type,
    weapon_type: weapon_type,
    reload_type: reload_type,
    additional_effects: additional_effects,
    manufacturer: manufacturer,
  };

  const weapon = new Weapon(weaponDetail);

  await weapon.save();
  console.log(`Added weapon: ${name}`);
}

async function partCreate(name, manufacturer, part_type) {
  const partDetail = {
    name: name,
    manufacturer: manufacturer,
    part_type: part_type,
  };

  const part = new Part(partDetail);
  await part.save();
  console.log(`Added part: ${name}`);
}

async function createCorporation() {
  console.log("Adding corporations");
  await Promise.all([
    genreCreate("ALLMIND"),
    genreCreate("ARQUEBUS CORP"),
    genreCreate("BALAM"),
    genreCreate("BAWS"),
    genreCreate("DAFENG"),
    genreCreate("ELCANO FOUNDRY"),
    genreCreate("FIRMEZA"),
    genreCreate("FURLONG DYNAMICS"),
    genreCreate("MELINITE"),
    genreCreate("RAD"),
    genreCreate("RUBICON RESEARCH INSTITUTE"),
    genreCreate("SCHNEIDER"),
    genreCreate("TAKIGAWA"),
    genreCreate("VCPL"),
  ]);
}

async function createWeapons() {
  console.log("Adding weapons");

  await Promise.all([
    params.armsWeaponParams.forEach((arr) => {
      weaponCreate(...arr);
    }),
    params.backWeaponParams.forEach((arr) => {
      weaponCreate(...arr);
    }),
  ]);
}

async function createParts() {
  console.log("Adding parts");
  await Promise.all([
    params.headPartParams.forEach((arr) => {
      partCreate(...arr);
    }),
    params.bodyPartParams.forEach((arr) => {
      partCreate(...arr);
    }),
    params.armsPartParams.forEach((arr) => {
      partCreate(...arr);
    }),
    params.legsPartParams.forEach((arr) => {
      partCreate(...arr);
    }),
    params.boosterPartParams.forEach((arr) => {
      partCreate(...arr);
    }),
    params.fcsPartParams.forEach((arr) => {
      partCreate(...arr);
    }),
    params.generatorPartParams.forEach((arr) => {
      partCreate(...arr);
    }),
  ]);
}
