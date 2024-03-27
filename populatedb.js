#! /usr/bin/env node

console.log(
  'This script populates corporations, weapons, and parts to the database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Corporation = require("./models/coporation");
const Weapon = require("./models/weapon");
const Part = require("./models/part");

const corporations = [];

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
async function corporationCreate(index, name) {
  const corp = new Corporation({
    name: name,
    weapons: await Weapon.find({ manufacturer: name }).sort(1),
    parts: await Part.find({ manufacturer: name }).sort(1),
  });

  await corp.save();
  corp[index] = corp;
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
  manufacturer,
  price
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
    price: price,
  };

  const weapon = new Weapon(weaponDetail);

  await weapon.save();
  console.log(`Added weapon: ${name}`);
}

async function partCreate(name, manufacturer, part_type, price) {
  const partDetail = {
    name: name,
    manufacturer: manufacturer,
    part_type: part_type,
    price: price,
  };

  const part = new Part(partDetail);
  await part.save();
  console.log(`Added part: ${name}`);
}

async function createCorporation() {
  console.log("Adding corporations");
  await Promise.all([
    genreCreate(0, "ALLMIND"),
    genreCreate(1, "ARQUEBUS CORP"),
    genreCreate(2, "BALAM"),
    genreCreate(3, "BAWS"),
    genreCreate(4, "DAFENG"),
    genreCreate(5, "ELCANO FOUNDRY"),
    genreCreate(6, "FIRMEZA"),
    genreCreate(7, "FURLONG DYNAMICS"),
    genreCreate(8, "MELINITE"),
    genreCreate(9, "RAD"),
    genreCreate(10, "RUBICON RESEARCH INSTITUTE"),
    genreCreate(11, "SCHNEIDER"),
    genreCreate(12, "TAKIGAWA"),
    genreCreate(13, "VCPL"),
  ]);
}

async function createWeapons() {
  console.log("Adding weapons");
  await Promise.all([]);
}

async function createParts() {
  console.log("Adding parts");
  await Promise.all([]);
}
