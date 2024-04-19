#! /usr/bin/env node

console.log(
  'This script populates corporations, weapons, and parts to the database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Corporation = require("./models/coporation");
const Weapon = require("./models/weapon");
const Part = require("./models/part");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_KEY}@cluster0.ozxq9uz.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0`;
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
const corpList = [];

// We pass the index to the ...Create functions so that, for example,
// corp[0] will always be the Company ARQUEBUS, regardless of the order
// in which the elements of promise.all's argument complete.
async function corporationCreate(index, name) {
  const corp = new Corporation({
    name: name,
  });

  corpList[index] = corp;
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

  await Corporation.updateOne(
    { name: weapon.manufacturer.name },
    { $push: { weapons: weapon } },
    { upsert: true }
  );

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

  await Corporation.updateOne(
    { name: part.manufacturer.name },
    { $push: { parts: part } },
    { upsert: true }
  );

  await part.save();
  console.log(`Added part: ${name}`);
}

async function createCorporation() {
  console.log("Adding corporations");
  await Promise.all([
    corporationCreate(0, "ALLMIND"),
    corporationCreate(1, "ARQUEBUS CORP"),
    corporationCreate(2, "BALAM"),
    corporationCreate(3, "BAWS"),
    corporationCreate(4, "DAFENG"),
    corporationCreate(5, "ELCANO FOUNDRY"),
    corporationCreate(6, "FIRMEZA"),
    corporationCreate(7, "FURLONG DYNAMICS"),
    corporationCreate(8, "MELINITE"),
    corporationCreate(9, "RAD"),
    corporationCreate(10, "RUBICON RESEARCH INSTITUTE"),
    corporationCreate(11, "SCHNEIDER"),
    corporationCreate(12, "TAKIGAWA"),
    corporationCreate(13, "VCPL"),
  ]);
}

async function createWeapons() {
  console.log("Adding weapons");

  await Promise.all([
    weaponCreate(
      "PB-033M ASHMEAD",
      "Arms",
      "Pile Bunker",
      "Kinetic",
      "Melee",
      "Overheat",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "DF-ET09 TAI-YANG-SHOU",
      "Arms",
      "Explosive Thrower",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[4]
    ),
    weaponCreate(
      "WB-0010 DOUBLE TROUBLE",
      "Arms",
      "Chainsaw",
      "Kinetic",
      "Melee",
      "Overheat",
      "None",
      corpList[9]
    ),
    weaponCreate(
      "VP-67EB",
      "Arms",
      "Stun Baton",
      "Kinetic",
      "Melee",
      "Overheat",
      "Shock",
      corpList[1]
    ),
    weaponCreate(
      "VP-67LD",
      "Arms",
      "Laser Dagger",
      "Energy",
      "Melee",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "Vvc-770LB",
      "Arms",
      "Laser Blade",
      "Energy",
      "Melee",
      "Overheat",
      "None",
      corpList[13]
    ),
    weaponCreate(
      "Vvc-774LS",
      "Arms",
      "Laser Slicer",
      "Energy",
      "Melee",
      "Overheat",
      "None",
      corpList[13]
    ),
    weaponCreate(
      "VE-67LLA",
      "Arms",
      "Laser Lance",
      "Energy",
      "Melee",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "44-143 HMMR",
      "Arms",
      "Plasma Thrower",
      "Kinetic",
      "Melee",
      "Overheat",
      "None",
      corpList[0]
    ),
    weaponCreate(
      "HI-32: BU-TT/A",
      "Arms",
      "Pulse Blade",
      "Energy",
      "Melee",
      "Overheat",
      "None",
      corpList[12]
    ),
    weaponCreate(
      "IA-C01W2: MOONLIGHT",
      "Arms",
      "Light Wave Blade",
      "Energy",
      "Melee",
      "Overheat",
      "None",
      corpList[10]
    ),
    weaponCreate(
      "IA-C01W7: ML-REDSHIFT",
      "Arms",
      "Coral Oscillator",
      "Coral",
      "Melee",
      "Overheat",
      "None",
      corpList[10]
    ),
    weaponCreate(
      "IB-C03W2: WLT 101",
      "Arms",
      "Coral Oscillator",
      "Coral",
      "Melee",
      "Overheat",
      "None",
      corpList[10]
    ),
    weaponCreate(
      "MA-J-200 RANSETSU-RF",
      "Arms",
      "Burst Rifle",
      "Kinetic",
      "Semi-Auto",
      "Magazine",
      "None",
      corpList[3]
    ),
    weaponCreate(
      "LR-036 CURTIS",
      "Arms",
      "Linear Rifle",
      "Kinetic",
      "Semi-Auto",
      "Magazine",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "LR-037 HARRIS",
      "Arms",
      "Linear Rifle",
      "Kinetic",
      "Semi-Auto",
      "Magazine",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "RF-024 TURNER",
      "Arms",
      "Assault Rifle",
      "Kinetic",
      "Full-Auto",
      "Magazine",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "RF-025 SCUDDER",
      "Arms",
      "Assault Rifle",
      "Kinetic",
      "Full-Auto",
      "Magazine",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "MA-J-201 RANSETSU-AR",
      "Arms",
      "Burst Assault Rifle",
      "Kinetic",
      "Full-Auto",
      "Magazine",
      "None",
      corpList[3]
    ),
    weaponCreate(
      "MG-014 LUDLOW",
      "Arms",
      "Machine Gun",
      "Kinetic",
      "Full-Auto",
      "Magazine",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "DF-MG-02 CHANG-CHEN",
      "Arms",
      "Machine Gun",
      "Kinetic",
      "Full-Auto",
      "Magazine",
      "None",
      corpList[4]
    ),
    weaponCreate(
      "MA-E-210 ETSUJIN",
      "Arms",
      "Burst Machine Gun",
      "Kinetic",
      "Full-Auto",
      "Magazine",
      "None",
      corpList[3]
    ),
    weaponCreate(
      "DF-GA-08 HU-BEN",
      "Arms",
      "Gatling Gun",
      "Kinetic",
      "Full-Auto",
      "Overheat",
      "None",
      corpList[4]
    ),
    weaponCreate(
      "SG-026 HALDEMAN",
      "Arms",
      "Shotgun",
      "Kinetic",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "SG-027 ZIMMERMAN",
      "Arms",
      "Shotgun",
      "Kinetic",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "WR-0777 SWEET SIXTEEN",
      "Arms",
      "Shotgun",
      "Kinetic",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[9]
    ),
    weaponCreate(
      "HG-003 COQUILLETT",
      "Arms",
      "Handgun",
      "Kinetic",
      "Semi-Auto",
      "Magazine",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "HG-004 DUCKETT",
      "Arms",
      "Handgun",
      "Kinetic",
      "Semi-Auto",
      "Magazine",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "MA-E-211 SAMPU",
      "Arms",
      "Burst Handgun",
      "Kinetic",
      "Burst",
      "Magazine",
      "None",
      corpList[3]
    ),
    weaponCreate(
      "EL-PW-00 VIENTO",
      "Arms",
      "Needle Gun",
      "Kinetic",
      "Semi-Auto",
      "Magazine",
      "None",
      corpList[5]
    ),
    weaponCreate(
      "VP-66EG",
      "Arms",
      "Stun Gun",
      "Kinetic",
      "Semi-Auto",
      "Magazine",
      "Shock",
      corpList[1]
    ),
    weaponCreate(
      "DF-BA-06 XUAN-GE",
      "Arms",
      "Bazooka",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[4]
    ),
    weaponCreate(
      "MAJESTIC",
      "Arms",
      "Bazooka",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[8]
    ),
    weaponCreate(
      "LITTLE GEM",
      "Arms",
      "Bazooka",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[8]
    ),
    weaponCreate(
      "44-141 JVLN ALPHA",
      "Arms",
      "Detonating Bazooka",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[0]
    ),
    weaponCreate(
      "DF-GR-07 GOU-CHEN",
      "Arms",
      "Grenade Launcher",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[4]
    ),
    weaponCreate(
      "DIZZY",
      "Arms",
      "Grenade Launcher",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[8]
    ),
    weaponCreate(
      "IRIDIUM",
      "Arms",
      "Grenade Launcher",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[8]
    ),
    weaponCreate(
      "MA-T-222 KYORAI",
      "Arms",
      "Napalm Bomb Launcher",
      "Explosive",
      "Charge",
      "Single Shot",
      "ACS Failure",
      corpList[3]
    ),
    weaponCreate(
      "MA-T-223 KYORIKU",
      "Arms",
      "Jamming Bomb Launcher",
      "Kinetic",
      "Charge",
      "Single Shot",
      "Camera Disruption",
      corpList[3]
    ),
    weaponCreate(
      "WS-1200 THERAPIST",
      "Arms",
      "Stun Bomb Launcher",
      "Energy",
      "Charge",
      "Magazine",
      "Shock",
      corpList[9]
    ),
    weaponCreate(
      "WB-0000 BAD COOK",
      "Arms",
      "Flamethrower",
      "Explosive",
      "Full-Auto",
      "Overheat",
      "ACS Failure",
      corpList[9]
    ),
    weaponCreate(
      "VP-66LR",
      "Arms",
      "Laser Rifle",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "VE-66LRA",
      "Arms",
      "Laser Rifle",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "VE-66LRB",
      "Arms",
      "Laser Rifle",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "WUERGER/66E",
      "Arms",
      "Laser Shotgun",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[11]
    ),
    weaponCreate(
      "VP-66LS",
      "Arms",
      "Laser Shotgun",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "VP-66LH",
      "Arms",
      "Laser Handgun",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "Vvc-760PR",
      "Arms",
      "Plasma Rifle",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[13]
    ),
    weaponCreate(
      "IA-C01W1: NEBULA",
      "Arms",
      "Plasma Rifle",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[10]
    ),
    weaponCreate(
      "IA-C01W6: NB-REDSHIFT",
      "Arms",
      "Coral Rifle",
      "Coral",
      "Charge",
      "Overheat",
      "None",
      corpList[10]
    ),
    weaponCreate(
      "IB-C03W1: WLT 011",
      "Arms",
      "Coral Rifle",
      "Coral",
      "Charge",
      "Overheat",
      "None",
      corpList[10]
    ),
    weaponCreate(
      "44-142 KRSV",
      "Arms",
      "Multi Energy Rifle",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[0]
    ),
    weaponCreate(
      "HI-16: GU-Q1",
      "Arms",
      "Pulse Gun",
      "Energy",
      "Full-Auto",
      "Overheat",
      "None",
      corpList[12]
    ),
    weaponCreate(
      "HI-18: GU-A2",
      "Arms",
      "Pulse Gun",
      "Energy",
      "Full-Auto",
      "Overheat",
      "None",
      corpList[12]
    ),
    weaponCreate(
      "HML-G2/P19MLT-04",
      "Arms",
      "Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "HML-G3/P08SPL-06",
      "Arms",
      "Split Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "WS-5000 APERITIF",
      "Arms",
      "Siege Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[9]
    ),
    weaponCreate(
      "VP-61PS",
      "Back",
      "Pulse Shield",
      "Kinetic",
      "Shield",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "SI-24: SU-Q5",
      "Back",
      "Pulse Shield",
      "Kinetic",
      "Shield",
      "Overheat",
      "None",
      corpList[12]
    ),
    weaponCreate(
      "SI-27: SU-R8",
      "Back",
      "Pulse Shield",
      "Kinetic",
      "Shield",
      "Overheat",
      "None",
      corpList[12]
    ),
    weaponCreate(
      "VP-61PB",
      "Back",
      "Pulse Buckler",
      "Kinetic",
      "Shield",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "SI-29:SU-TT/C",
      "Back",
      "Pulse Buckler",
      "Kinetic",
      "Shield",
      "Overheat",
      "None",
      corpList[12]
    ),
    weaponCreate(
      "VE-61PSA",
      "Back",
      "Pulse Scutum",
      "Kinetic",
      "Shield",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "IB-C03W4: NGI 028",
      "Back",
      "Coral Shield",
      "Kinetic",
      "Shield",
      "Overheat",
      "None",
      corpList[10]
    ),
    weaponCreate(
      "SB-033M MORLEY",
      "Back",
      "Spread Bazooka",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "EARSHOT",
      "Back",
      "Spread Bazooka",
      "Explosive",
      "Semi-Auto",
      "Single Shot",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "SONGBIRDS",
      "Back",
      "Grenade Cannon",
      "Explosive",
      "Burst",
      "Single Shot",
      "None",
      corpList[8]
    ),
    weaponCreate(
      "VE-60SNA",
      "Back",
      "Stun Needle Launcher",
      "Kinetic",
      "Semi-Auto",
      "Single Shot",
      "Shock",
      corpList[1]
    ),
    weaponCreate(
      "VP-60LCS",
      "Back",
      "Laser Cannon",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "VE-60LCA",
      "Back",
      "Laser Cannon",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "VP-60LCD",
      "Back",
      "Diffuse Laser Cannon",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "FASAN/60E",
      "Back",
      "Plasma Cannon",
      "Energy",
      "Charge",
      "Overheat",
      "None",
      corpList[11]
    ),
    weaponCreate(
      "KRANICH/60Z",
      "Back",
      "Pulse Cannon",
      "Energy",
      "Full-Auto",
      "Overheat",
      "None",
      corpList[11]
    ),
    weaponCreate(
      "EULE/60D",
      "Back",
      "Pulse Shield Launcher",
      "Energy",
      "Semi-Auto",
      "Magazine",
      "None",
      corpList[11]
    ),
    weaponCreate(
      "IA-C01W3: AURORA",
      "Back",
      "Light Wave Cannon",
      "Energy",
      "Homing",
      "Single Shot",
      "None",
      corpList[10]
    ),
    weaponCreate(
      "BML-G1/P20MLT-04",
      "Back",
      "Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G2/P03MLT-06",
      "Back",
      "Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G2/P05MLT-10",
      "Back",
      "Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G2/P19SPL-12",
      "Back",
      "Split Missle Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G2/P16SPL-08",
      "Back",
      "Split Missle Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G2/P17SPL-16",
      "Back",
      "Split Missle Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G1/P31DUO-02",
      "Back",
      "Dual Missile Launcher",
      "Explosive",
      "Homing",
      "Magazine",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G1/P32DUO-03",
      "Back",
      "Dual Missile Launcher",
      "Explosive",
      "Homing",
      "Magazine",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G2/P08DUO-03",
      "Back",
      "Dual Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G1/P01VTC-04",
      "Back",
      "Vertical Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G1/P03VTC-08",
      "Back",
      "Vertical Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G1/P07VTC-12",
      "Back",
      "Vertical Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G3/P04ACT-01",
      "Back",
      "Active Homing Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G3/P05ACT-02",
      "Back",
      "Active Homing Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "BML-G1/P29CNT",
      "Back",
      "Container Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[7]
    ),
    weaponCreate(
      "WR-0999 DELIVERY BOY",
      "Back",
      "Cluster Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[9]
    ),
    weaponCreate(
      "WS-5001 SOUP",
      "Back",
      "Scatter Missile Launcher",
      "Explosive",
      "Homing",
      "Magazine",
      "None",
      corpList[9]
    ),
    weaponCreate(
      "45-091 JVLN BETA",
      "Back",
      "Detonating Missile Launcher",
      "Explosive",
      "Homing",
      "Single Shot",
      "None",
      corpList[0]
    ),
    weaponCreate(
      "EL-PW-01 TRUENO",
      "Back",
      "Needle Missle Launcher",
      "Kinetic",
      "Homing",
      "Single Shot",
      "None",
      corpList[5]
    ),
    weaponCreate(
      "Vvc-703PM",
      "Back",
      "Plasma Missile Launcher",
      "Energy",
      "Homing",
      "Single Shot",
      "None",
      corpList[13]
    ),
    weaponCreate(
      "Vvc-706PM",
      "Back",
      "Plasma Missile Launcher",
      "Energy",
      "Homing",
      "Single Shot",
      "None",
      corpList[13]
    ),
    weaponCreate(
      "Vvc-70PM",
      "Back",
      "Plasma Missile Launcher",
      "Energy",
      "Homing",
      "Single Shot",
      "None",
      corpList[13]
    ),
    weaponCreate(
      "IB-C03W3: NGI 006",
      "Back",
      "Coral Missile Launcher",
      "Coral",
      "Homing",
      "Single Shot",
      "None",
      corpList[10]
    ),
    weaponCreate(
      "BO-044 HUXLEY",
      "Back",
      "Bullet Orbit",
      "Kinetic",
      "Burst",
      "Overheat",
      "None",
      corpList[2]
    ),
    weaponCreate(
      "45-091 ORBT",
      "Back",
      "Laser Orbit",
      "Energy",
      "Burst",
      "Overheat",
      "None",
      corpList[0]
    ),
    weaponCreate(
      "VP-60LT",
      "Back",
      "Laser Turret",
      "Energy",
      "Semi-Auto",
      "Magazine",
      "None",
      corpList[1]
    ),
    weaponCreate(
      "Vvc-700LD",
      "Back",
      "Laser Drone",
      "Energy",
      "Homing",
      "Single Shot",
      "None",
      corpList[13]
    ),
    // params.armsWeaponParams.forEach((arr) => {
    //   weaponCreate(...arr);
    // }),
    // params.backWeaponParams.forEach((arr) => {
    //   weaponCreate(...arr);
    // }),
  ]);
}

async function createParts() {
  console.log("Adding parts");
  await Promise.all([
    partCreate("AH-J-124 BASHO", corpList[3], "Head"),
    partCreate("AH-J-124/RC JAILBREAK", corpList[3], "Head"),
    partCreate("HD-011 MELANDER", corpList[2], "Head"),
    partCreate("HD-033M VERRILL", corpList[2], "Head"),
    partCreate("HD-012 MELANDER C3", corpList[2], "Head"),
    partCreate("DF-HD-08 TIAN-QIANG", corpList[4], "Head"),
    partCreate("VP-44S", corpList[1], "Head"),
    partCreate("VP-44D", corpList[1], "Head"),
    partCreate("NACHTREIHER/44E", corpList[11], "Head"),
    partCreate("KASUAR/44Z", corpList[11], "Head"),
    partCreate("VE-44A", corpList[1], "Head"),
    partCreate("VE-44B", corpList[1], "Head"),
    partCreate("HC-2000 FINDER EYE", corpList[9], "Head"),
    partCreate("HC-2000/BC SHADE EYE", corpList[9], "Head"),
    partCreate("HC-3000 WRECKER", corpList[9], "Head"),
    partCreate("HS-5000 APPETIZER", corpList[9], "Head"),
    partCreate("EL-TH-10 FIRMEZA", corpList[5], "Head"),
    partCreate("EL-PH-00 ALBA", corpList[5], "Head"),
    partCreate("20-081 MIND ALPHA", corpList[0], "Head"),
    partCreate("20-082 MIND BETA", corpList[0], "Head"),
    partCreate("IA-C01H: EPHEMERA", corpList[10], "Head"),
    partCreate("IB-C03H: HAL 826", corpList[10], "Head"),
    partCreate("AH-J-120 BASHO", corpList[3], "Body"),
    partCreate("AH-J-120/RC JAILBREAK", corpList[3], "Body"),
    partCreate("BD-011 MELANDER", corpList[2], "Body"),
    partCreate("BD-012 MELANDER C3", corpList[2], "Body"),
    partCreate("DF-BD-08 TIAN-QIANG", corpList[4], "Body"),
    partCreate("VP-40S", corpList[1], "Body"),
    partCreate("NACHTREIHER/40E", corpList[11], "Body"),
    partCreate("VE-40A", corpList[1], "Body"),
    partCreate("CC-2000 ORBITER", corpList[9], "Body"),
    partCreate("CC-3000 WRECKER", corpList[9], "Body"),
    partCreate("CS-5000 MAIN DISH", corpList[9], "Body"),
    partCreate("EL-TC-10 FIRMEZA", corpList[5], "Body"),
    partCreate("EL-PC-00 ALBA", corpList[5], "Body"),
    partCreate("07-061 MIND ALPHA", corpList[0], "Body"),
    partCreate("IA-C01C: EPHMERA", corpList[10], "Body"),
    partCreate("IB-C03C: HAL 826", corpList[10], "Body"),
    partCreate("AA-J-123 BASHO", corpList[3], "Arms"),
    partCreate("AA-J-123/RC JAILBREAK", corpList[3], "Arms"),
    partCreate("AR-011 MELANDER", corpList[2], "Arms"),
    partCreate("AR-012 MELANDER C3", corpList[2], "Arms"),
    partCreate("DF-AR-08 TIAN-QIANG", corpList[4], "Arms"),
    partCreate("DF-AR-09 TIAN-LAO", corpList[4], "Arms"),
    partCreate("VP-46S", corpList[1], "Arms"),
    partCreate("VP-46D", corpList[1], "Arms"),
    partCreate("NACHTREIHER/46E", corpList[11], "Arms"),
    partCreate("VE-46A", corpList[1], "Arms"),
    partCreate("AC-2000 TOOL ARM", corpList[9], "Arms"),
    partCreate("AC-3000 WRECKER", corpList[9], "Arms"),
    partCreate("AS-5000 SALAD", corpList[9], "Arms"),
    partCreate("EL-TA-10 FIRMEZA", corpList[5], "Arms"),
    partCreate("EL-PA-00 ALBA", corpList[5], "Arms"),
    partCreate("04-101 MIND ALPHA", corpList[0], "Arms"),
    partCreate("IA-CO1A: EPHEMERA", corpList[10], "Arms"),
    partCreate("IB-C03A: HAL 826", corpList[10], "Arms"),
    partCreate("AL-J-121 BASHO", corpList[3], "Legs"),
    partCreate("AL-J-121/RC JAILBREAK", corpList[3], "Legs"),
    partCreate("LG-011 MELANDER", corpList[2], "Legs"),
    partCreate("LG-013 MELANDER C3", corpList[2], "Legs"),
    partCreate("DF-LG-08 TIAN-QIANG", corpList[4], "Legs"),
    partCreate("VP-422", corpList[1], "Legs"),
    partCreate("NACHTREIHER/42E", corpList[11], "Legs"),
    partCreate("VE-42A", corpList[1], "Legs"),
    partCreate("2C-2000 CRAWLER", corpList[9], "Legs"),
    partCreate("2C-3000 WRECKER", corpList[9], "Legs"),
    partCreate("2S-5000 DESSERT", corpList[9], "Legs"),
    partCreate("EL-TL-10", corpList[6], "Legs"),
    partCreate("EL-PL-00 ALBA", corpList[5], "Legs"),
    partCreate("06-041 MIND ALPHA", corpList[0], "Legs"),
    partCreate("IA-C01L: EPHEMERA", corpList[10], "Legs"),
    partCreate("IB-C03L: HAL 826", corpList[10], "Legs"),
    partCreate("KASUAR/42Z", corpList[11], "Legs"),
    partCreate("06-042 MIND BETA", corpList[0], "Legs"),
    partCreate("RC-2000 SPRING CHICKEN", corpList[9], "Legs"),
    partCreate("LG-033M VERRILL", corpList[2], "Legs"),
    partCreate("VP-424", corpList[1], "Legs"),
    partCreate("LG-022T BORNEMISSZA", corpList[2], "Legs"),
    partCreate("VE-42B", corpList[1], "Legs"),
    partCreate("EL-TL-11", corpList[5], "Legs"),
    partCreate("AB-J-137 KIKAKU", corpList[3], "Boosters"),
    partCreate("BST-G2/P04", corpList[7], "Boosters"),
    partCreate("BST-G1/P10", corpList[7], "Boosters"),
    partCreate("BST-G2/P06SPD", corpList[7], "Boosters"),
    partCreate("ALULA/21E", corpList[11], "Boosters"),
    partCreate("FLUEGEL", corpList[11], "Boosters"),
    partCreate("BUERZEL/21D", corpList[11], "Boosters"),
    partCreate("BC-0600 12345", corpList[9], "Boosters"),
    partCreate("BC-0400 MULE", corpList[9], "Boosters"),
    partCreate("BC-0200 GRIDWALKER", corpList[9], "Boosters"),
    partCreate("IA-C01B: GILLS", corpList[10], "Boosters"),
    partCreate("IB-C03B: NGI 001", corpList[10], "Boosters"),
    partCreate("FCS-G1/P01", corpList[7], "FCS"),
    partCreate("FCS-G2/P05", corpList[7], "FCS"),
    partCreate("FCS-G2/P10SLT", corpList[7], "FCS"),
    partCreate("FCS-G2/P12SML", corpList[7], "FCS"),
    partCreate("FC-006 ABBOT", corpList[2], "FCS"),
    partCreate("FC-008 TALBOT", corpList[2], "FCS"),
    partCreate("VE-21A", corpList[1], "FCS"),
    partCreate("VE-21B", corpList[1], "FCS"),
    partCreate("IA-C01F: OCELLUS", corpList[10], "FCS"),
    partCreate("IB-C03F: WLT 001", corpList[10], "FCS"),
    partCreate("AG-J-098 JOSO", corpList[3], "Generator"),
    partCreate("AG-E-013 YABA", corpList[3], "Generator"),
    partCreate("AG-T-005 HOKUSHI", corpList[3], "Generator"),
    partCreate("DF-GN-02 LING-TAI", corpList[4], "Generator"),
    partCreate("DF-GN-06 MING-TANG", corpList[4], "Generator"),
    partCreate("DF-GN-08 SAN-TAI", corpList[4], "Generator"),
    partCreate("VP-20S", corpList[1], "Generator"),
    partCreate("VP-20C", corpList[1], "Generator"),
    partCreate("VP-20D", corpList[1], "Generator"),
    partCreate("VE-20A", corpList[1], "Generator"),
    partCreate("VE-20B", corpList[1], "Generator"),
    partCreate("VE-20C", corpList[1], "Generator"),
    partCreate("IA-C01G: AORTA", corpList[10], "Generator"),
    partCreate("IB-C03B: NGI 000", corpList[10], "Generator"),
  ]);
}
