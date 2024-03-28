// const Corporation = require("./models/coporation"));
// const Weapon = require("./models/weapon"));
// const Part = require("./models/part"));

async function getCorpID(name) {
  const corp = await Corporation.findOne({ name: name });
  return corp._id;
}

(exports.armsWeaponParams = weaponCreate(
  "PB-033m ASHMEAD",
  "Arms",
  "Pile Bunker",
  "Kinetic",
  "Melee",
  "Overheat",
  "None",
  getCorpID("BALAM")
)),
  weaponCreate(
    "DF-ET09 TAI-YANG-SHOU",
    "Arms",
    "Explosive Thrower",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("DAFENG")
  ),
  weaponCreate(
    "WB-0010 DOUBLE TROUBLE",
    "Arms",
    "Chainsaw",
    "Kinetic",
    "Melee",
    "Overheat",
    "None",
    getCorpID("RAD")
  ),
  weaponCreate(
    "VP-67EB",
    "Arms",
    "Stun Baton",
    "Kinetic",
    "Melee",
    "Overheat",
    "Shock",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "VP-67LD",
    "Arms",
    "Laser Dagger",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "Vvc-770LB",
    "Arms",
    "Laser Blade",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    getCorpID("VCPL")
  ),
  weaponCreate(
    "Vvc-774LS",
    "Arms",
    "Laser Slicer",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    getCorpID("VCPL")
  ),
  weaponCreate(
    "VE-67LLA",
    "Arms",
    "Laser Lance",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "44-143 HMMR",
    "Arms",
    "Plasma Thrower",
    "Kinetic",
    "Melee",
    "Overheat",
    "None",
    getCorpID("ALLMIND")
  ),
  weaponCreate(
    "HI-32: BU-TT/A",
    "Arms",
    "Pulse Blade",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    getCorpID("TAKIGAWA")
  ),
  weaponCreate(
    "IA-C01W2: MOONLIGHT",
    "Arms",
    "Light Wave Blade",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    getCorpID("RUBICON RESEARCH INSTITUTE")
  ),
  weaponCreate(
    "IA-C01W7: ML-REDSHIFT",
    "Arms",
    "Coral Oscillator",
    "Coral",
    "Melee",
    "Overheat",
    "None",
    getCorpID("RUBICON RESEARCH INSTITUTE")
  ),
  weaponCreate(
    "IB-C03W2: WLT 101",
    "Arms",
    "Coral Oscillator",
    "Coral",
    "Melee",
    "Overheat",
    "None",
    getCorpID("RUBICON RESEARCH INSTITUTE")
  ),
  weaponCreate(
    "MA-J-200 RANSETSU-RF",
    "Arms",
    "Burst Rifle",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    getCorpID("BAWS")
  ),
  weaponCreate(
    "LR-036 CURTIS",
    "Arms",
    "Linear Rifle",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "LR-037 HARRIS",
    "Arms",
    "Linear Rifle",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "RF-024 TURNER",
    "Arms",
    "Assault Rifle",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "RF-025 SCUDDER",
    "Arms",
    "Assault Rifle",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "MA-J-201 RANSETSU-AR",
    "Arms",
    "Burst Assault Rifle",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    getCorpID("BAWS")
  ),
  weaponCreate(
    "MG-014 LUDLOW",
    "Arms",
    "Machine Gun",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "DF-MG-02 CHANG-CHEN",
    "Arms",
    "Machine Gun",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    getCorpID("DAFENG")
  ),
  weaponCreate(
    "MA-E-210 ETSUJIN",
    "Arms",
    "Burst Machine Gun",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    getCorpID("BAWS")
  ),
  weaponCreate(
    "DF-GA-08 HU-BEN",
    "Arms",
    "Gatling Gun",
    "Kinetic",
    "Full-Auto",
    "Overheat",
    "None",
    getCorpID("DAFENG")
  ),
  weaponCreate(
    "SG-026 HALDEMAN",
    "Arms",
    "Shotgun",
    "Kinetic",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "SG-027 ZIMMERMAN",
    "Arms",
    "Shotgun",
    "Kinetic",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "WR-0777 SWEET SIXTEEN",
    "Arms",
    "Shotgun",
    "Kinetic",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("RAD")
  ),
  weaponCreate(
    "HG-003 COQUILLETT",
    "Arms",
    "Handgun",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "HG-004 DUCKETT",
    "Arms",
    "Handgun",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "MA-E-211 SAMPU",
    "Arms",
    "Burst Handgun",
    "Kinetic",
    "Burst",
    "Magazine",
    "None",
    getCorpID("BAWS")
  ),
  weaponCreate(
    "EL-PW-00 VIENTO",
    "Arms",
    "Needle Gun",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    getCorpID("ELCANO FOUNDRY")
  ),
  weaponCreate(
    "VP-66EG",
    "Arms",
    "Stun Gun",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "Shock",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "DF-BA-06 XUAN-GE",
    "Arms",
    "Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("DAFENG")
  ),
  weaponCreate(
    "MAJESTIC",
    "Arms",
    "Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("MELINITE")
  ),
  weaponCreate(
    "LITTLE GEM",
    "Arms",
    "Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("MELINITE")
  ),
  weaponCreate(
    "44-141 JVLN ALPHA",
    "Arms",
    "Detonating Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("ALLMIND")
  ),
  weaponCreate(
    "DF-GR-07 GOU-CHEN",
    "Arms",
    "Grenade Launcher",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("DAFENG")
  ),
  weaponCreate(
    "DIZZY",
    "Arms",
    "Grenade Launcher",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("MELINITE")
  ),
  weaponCreate(
    "IRIDIUM",
    "Arms",
    "Grenade Launcher",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("MELINITE")
  ),
  weaponCreate(
    "MA-T-222 KYORAI",
    "Arms",
    "Napalm Bomb Launcher",
    "Explosive",
    "Charge",
    "Single Shot",
    "ACS Failure",
    getCorpID("BAWS")
  ),
  weaponCreate(
    "MA-T-223 KYORIKU",
    "Arms",
    "Jamming Bomb Launcher",
    "Kinetic",
    "Charge",
    "Single Shot",
    "Camera Disruption",
    getCorpID("BAWS")
  ),
  weaponCreate(
    "WS-1200 THERAPIST",
    "Arms",
    "Stun Bomb Launcher",
    "Energy",
    "Charge",
    "Magazine",
    "Shock",
    getCorpID("RAD")
  ),
  weaponCreate(
    "WB-0000 BAD COOK",
    "Arms",
    "Flamethrower",
    "Explosive",
    "Full-Auto",
    "Overheat",
    "ACS Failure",
    getCorpID("RAD")
  ),
  weaponCreate(
    "VP-66LR",
    "Arms",
    "Laser Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "VE-66LRA",
    "Arms",
    "Laser Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "VE-66LRB",
    "Arms",
    "Laser Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "WUERGER/66E",
    "Arms",
    "Laser Shotgun",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("SCHNEIDER")
  ),
  weaponCreate(
    "VP-66LS",
    "Arms",
    "Laser Shotgun",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "VP-66LH",
    "Arms",
    "Laser Handgun",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "Vvc-760PR",
    "Arms",
    "Plasma Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("VCPL")
  ),
  weaponCreate(
    "IA-C01W1: NEBULA",
    "Arms",
    "Plasma Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("RUBICON RESEARCH INSTITUTE")
  ),
  weaponCreate(
    "IA-C01W6: NB-REDSHIFT",
    "Arms",
    "Coral Rifle",
    "Coral",
    "Charge",
    "Overheat",
    "None",
    getCorpID("RUBICON RESEARCH INSTITUTE")
  ),
  weaponCreate(
    "IB-C03W1: WLT 011",
    "Arms",
    "Coral Rifle",
    "Coral",
    "Charge",
    "Overheat",
    "None",
    getCorpID("RUBICON RESEARCH INSTITUTE")
  ),
  weaponCreate(
    "44-142 KRSV",
    "Arms",
    "Multi Energy Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("ALLMIND")
  ),
  weaponCreate(
    "HI-16: GU-Q1",
    "Arms",
    "Pulse Gun",
    "Energy",
    "Full-Auto",
    "Overheat",
    "None",
    getCorpID("TAKIGAWA")
  ),
  weaponCreate(
    "HI-18: GU-A2",
    "Arms",
    "Pulse Gun",
    "Energy",
    "Full-Auto",
    "Overheat",
    "None",
    getCorpID("TAKIGAWA")
  ),
  weaponCreate(
    "HML-G2/P19MLT-04",
    "Arms",
    "Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "HML-G3/P08SPL-06",
    "Arms",
    "Split Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "WS-5000 APERITIF",
    "Arms",
    "Siege Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("RAD")
  ),
  (exports.backWeaponParams = weaponCreate(
    "VP-61PS",
    "Back",
    "Pulse Shield",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  )),
  weaponCreate(
    "SI-24: SU-Q5",
    "Back",
    "Pulse Shield",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    getCorpID("TAKIGAWA")
  ),
  weaponCreate(
    "SI-27: SU-R8",
    "Back",
    "Pulse Shield",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    getCorpID("TAKIGAWA")
  ),
  weaponCreate(
    "VP-61PB",
    "Back",
    "Pulse Buckler",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "SI-29:SU-TT/C",
    "Back",
    "Pulse Buckler",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    getCorpID("TAKIGAWA")
  ),
  weaponCreate(
    "VE-61PSA",
    "Back",
    "Pulse Scutum",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "IB-C03W4: NGI 028",
    "Back",
    "Coral Shield",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    getCorpID("RUBICON RESEARCH INSTITUTE")
  ),
  weaponCreate(
    "SB-033M MORLEY",
    "Back",
    "Spread Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "EARSHOT",
    "Back",
    "Spread Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "SONGBIRDS",
    "Back",
    "Grenade Cannon",
    "Explosive",
    "Burst",
    "Single Shot",
    "None",
    getCorpID("MELINITE")
  ),
  weaponCreate(
    "VE-60SNA",
    "Back",
    "Stun Needle Launcher",
    "Kinetic",
    "Semi-Auto",
    "Single Shot",
    "Shock",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "VP-60LCS",
    "Back",
    "Laser Cannon",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "VE-60LCA",
    "Back",
    "Laser Cannon",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "VP-60LCD",
    "Back",
    "Diffuse Laser Cannon",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "FASAN/60E",
    "Back",
    "Plasma Cannon",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    getCorpID("SCHNEIDER")
  ),
  weaponCreate(
    "KRANICH/60Z",
    "Back",
    "Pulse Cannon",
    "Energy",
    "Full-Auto",
    "Overheat",
    "None",
    getCorpID("SCHNEIDER")
  ),
  weaponCreate(
    "EULE/60D",
    "Back",
    "Pulse Shield Launcher",
    "Energy",
    "Semi-Auto",
    "Magazine",
    "None",
    getCorpID("SCHNEIDER")
  ),
  weaponCreate(
    "IA-C01W3: AURORA",
    "Back",
    "Light Wave Cannon",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("RUBICON RESEARCH INSTITUTE")
  ),
  weaponCreate(
    "BML-G1/P20MLT-04",
    "Back",
    "Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G2/P03MLT-06",
    "Back",
    "Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G2/P05MLT-10",
    "Back",
    "Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G2/P19SPL-12",
    "Back",
    "Split Missle Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G2/P16SPL-08",
    "Back",
    "Split Missle Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G2/P17SPL-16",
    "Back",
    "Split Missle Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G1/P31DUO-02",
    "Back",
    "Dual Missile Launcher",
    "Explosive",
    "Homing",
    "Magazine",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G1/P32DUO-03",
    "Back",
    "Dual Missile Launcher",
    "Explosive",
    "Homing",
    "Magazine",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G2/P08DUO-03",
    "Back",
    "Dual Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G1/P01VTC-04",
    "Back",
    "Vertical Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G1/P03VTC-08",
    "Back",
    "Vertical Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G1/P07VTC-12",
    "Back",
    "Vertical Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G3/P04ACT-01",
    "Back",
    "Active Homing Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G3/P05ACT-02",
    "Back",
    "Active Homing Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "BML-G1/P29CNT",
    "Back",
    "Container Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("FURLONG DYNAMICS")
  ),
  weaponCreate(
    "WR-0999 DELIVERY BOY",
    "Back",
    "Cluster Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("RAD")
  ),
  weaponCreate(
    "WS-5001 SOUP",
    "Back",
    "Scatter Missile Launcher",
    "Explosive",
    "Homing",
    "Magazine",
    "None",
    getCorpID("RAD")
  ),
  weaponCreate(
    "45-091 JVLN BETA",
    "Back",
    "Detonating Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("ALLMIND")
  ),
  weaponCreate(
    "EL-PW-01 TRUENO",
    "Back",
    "Needle Missle Launcher",
    "Kinetic",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("ELCANO FOUNDRY")
  ),
  weaponCreate(
    "Vvc-703PM",
    "Back",
    "Plasma Missile Launcher",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("VCPL")
  ),
  weaponCreate(
    "Vvc-706PM",
    "Back",
    "Plasma Missile Launcher",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("VCPL")
  ),
  weaponCreate(
    "Vvc-70PM",
    "Back",
    "Plasma Missile Launcher",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("VCPL")
  ),
  weaponCreate(
    "IB-C03W3: NGI 006",
    "Back",
    "Coral Missile Launcher",
    "Coral",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("RUBICON RESEARCH INSTITUTE")
  ),
  weaponCreate(
    "BO-044 HUXLEY",
    "Back",
    "Bullet Orbit",
    "Kinetic",
    "Burst",
    "Overheat",
    "None",
    getCorpID("BALAM")
  ),
  weaponCreate(
    "45-091 ORBT",
    "Back",
    "Laser Orbit",
    "Energy",
    "Burst",
    "Overheat",
    "None",
    getCorpID("ALLMIND")
  ),
  weaponCreate(
    "VP-60LT",
    "Back",
    "Laser Turret",
    "Energy",
    "Semi-Auto",
    "Magazine",
    "None",
    getCorpID("ARQUEBUS CORP")
  ),
  weaponCreate(
    "Vvc-700LD",
    "Back",
    "Laser Drone",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    getCorpID("VCPL")
  ),
  (exports.headPartParams = [
    weaponCreate("AH-J-124 BASHO", getCorpID("BAWS"), "Head"),
    weaponCreate("AH-J-124/RC JAILBREAK", getCorpID("BAWS"), "Head"),
    weaponCreate("HD-011 MELANDER", getCorpID("BALAM"), "Head"),
    weaponCreate("HD-033M VERRILL", getCorpID("BALAM"), "Head"),
    weaponCreate("HD-012 MELANDER C3", getCorpID("BALAM"), "Head"),
    weaponCreate("DF-HD-08 TIAN-QIANG", getCorpID("DAFENG"), "Head"),
    weaponCreate("VP-44S", getCorpID("ARQUEBUS CORP"), "Head"),
    weaponCreate("VP-44D", getCorpID("ARQUEBUS CORP"), "Head"),
    weaponCreate("NACHTREIHER/44E", getCorpID("SCHNEIDER"), "Head"),
    weaponCreate("KASUAR/44Z", getCorpID("SCHNEIDER"), "Head"),
    weaponCreate("VE-44A", getCorpID("ARQUEBUS CORP"), "Head"),
    weaponCreate("VE-44B", getCorpID("ARQUEBUS CORP"), "Head"),
    weaponCreate("HC-2000 FINDER EYE", getCorpID("RAD"), "Head"),
    weaponCreate("HC-2000/BC SHADE EYE", getCorpID("RAD"), "Head"),
    weaponCreate("HC-3000 WRECKER", getCorpID("RAD"), "Head"),
    weaponCreate("HS-5000 APPETIZER", getCorpID("RAD"), "Head"),
    weaponCreate("EL-TH-10 FIRMEZA", getCorpID("ELCANO FOUNDRY"), "Head"),
    weaponCreate("EL-PH-00 ALBA", getCorpID("ELCANO FOUNDRY"), "Head"),
    weaponCreate("20-081 MIND ALPHA", getCorpID("ALLMIND"), "Head"),
    weaponCreate("20-082 MIND BETA", getCorpID("ALLMIND"), "Head"),
    weaponCreate(
      "IA-C01H: EPHEMERA",
      getCorpID("RUBICON RESEARCH INSTITUTE"),
      "Head"
    ),
    weaponCreate(
      "IB-C03H: HAL 826",
      getCorpID("RUBICON RESEARCH INSTITUTE"),
      "Head"
    ),
  ]);

exports.bodyPartParams = [
  weaponCreate("AH-J-120 BASHO", getCorpID("BAWS"), "Body"),
  weaponCreate("AH-J-120/RC JAILBREAK", getCorpID("BAWS"), "Body"),
  weaponCreate("BD-011 MELANDER", getCorpID("BALAM"), "Body"),
  weaponCreate("BD-012 MELANDER C3", getCorpID("BALAM"), "Body"),
  weaponCreate("DF-BD-08 TIAN-QIANG", getCorpID("DAFENG"), "Body"),
  weaponCreate("VP-40S", getCorpID("ARQUEBUS CORP"), "Body"),
  weaponCreate("NACHTREIHER/40E", getCorpID("SCHNEIDER"), "Body"),
  weaponCreate("VE-40A", getCorpID("ARQUEBUS CORP"), "Body"),
  weaponCreate("CC-2000 ORBITER", getCorpID("RAD"), "Body"),
  weaponCreate("CC-3000 WRECKER", getCorpID("RAD"), "Body"),
  weaponCreate("CS-5000 MAIN DISH", getCorpID("RAD"), "Body"),
  weaponCreate("EL-TC-10 FIRMEZA", getCorpID("ELCANO FOUNDRY"), "Body"),
  weaponCreate("EL-PC-00 ALBA", getCorpID("ELCANO FOUNDRY"), "Body"),
  weaponCreate("07-061 MIND ALPHA", getCorpID("ALLMIND"), "Body"),
  weaponCreate(
    "IA-C01C: EPHMERA",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Body"
  ),
  weaponCreate(
    "IB-C03C: HAL 826",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Body"
  ),
];

exports.armsPartParams = [
  weaponCreate("AA-J-123 BASHO", getCorpID("BAWS"), "Arms"),
  weaponCreate("AA-J-123/RC JAILBREAK", getCorpID("BAWS"), "Arms"),
  weaponCreate("AR-011 MELANDER", getCorpID("BALAM"), "Arms"),
  weaponCreate("AR-012 MELANDER C3", getCorpID("BALAM"), "Arms"),
  weaponCreate("DF-AR-08 TIAN-QIANG", getCorpID("DAFENG"), "Arms"),
  weaponCreate("DF-AR-09 TIAN-LAO", getCorpID("DAFENG"), "Arms"),
  weaponCreate("VP-46S", getCorpID("ARQUEBUS CORP"), "Arms"),
  weaponCreate("VP-46D", getCorpID("ARQUEBUS CORP"), "Arms"),
  weaponCreate("NACHTREIHER/46E", getCorpID("SCHNEIDER"), "Arms"),
  weaponCreate("VE-46A", getCorpID("ARQUEBUS CORP"), "Arms"),
  weaponCreate("AC-2000 TOOL ARM", getCorpID("RAD"), "Arms"),
  weaponCreate("AC-3000 WRECKER", getCorpID("RAD"), "Arms"),
  weaponCreate("AS-5000 SALAD", getCorpID("RAD"), "Arms"),
  weaponCreate("EL-TA-10 FIRMEZA", getCorpID("ELCANO FOUNDRY"), "Arms"),
  weaponCreate("EL-PA-00 ALBA", getCorpID("ELCANO FOUNDRY"), "Arms"),
  weaponCreate("04-101 MIND ALPHA", getCorpID("ALLMIND"), "Arms"),
  weaponCreate(
    "IA-CO1A: EPHEMERA",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Arms"
  ),
  weaponCreate(
    "IB-C03A: HAL 826",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Arms"
  ),
];

exports.legsPartParams = [
  weaponCreate("AL-J-121 BASHO", getCorpID("BAWS"), "Legs"),
  weaponCreate("AL-J-121/RC JAILBREAK", getCorpID("BAWS"), "Legs"),
  weaponCreate("LG-011 MELANDER", getCorpID("BALAM"), "Legs"),
  weaponCreate("LG-013 MELANDER C3", getCorpID("BALAM"), "Legs"),
  weaponCreate("DF-LG-08 TIAN-QIANG", getCorpID("DAFENG"), "Legs"),
  weaponCreate("VP-422", getCorpID("ARQUEBUS CORP"), "Legs"),
  weaponCreate("NACHTREIHER/42E", getCorpID("SCHNEIDER"), "Legs"),
  weaponCreate("VE-42A", getCorpID("ARQUEBUS CORP"), "Legs"),
  weaponCreate("2C-2000 CRAWLER", getCorpID("RAD"), "Legs"),
  weaponCreate("2C-3000 WRECKER", getCorpID("RAD"), "Legs"),
  weaponCreate("2S-5000 DESSERT", getCorpID("RAD"), "Legs"),
  weaponCreate("EL-TL-10", getCorpID("FIRMEZA"), "Legs"),
  weaponCreate("EL-PL-00 ALBA", getCorpID("ELCANO FOUNDRY"), "Legs"),
  weaponCreate("06-041 MIND ALPHA", getCorpID("ALLMIND"), "Legs"),
  weaponCreate(
    "IA-C01L: EPHEMERA",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Legs"
  ),
  weaponCreate(
    "IB-C03L: HAL 826",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Legs"
  ),
  weaponCreate("KASUAR/42Z", getCorpID("SCHNEIDER"), "Legs"),
  weaponCreate("06-042 MIND BETA", getCorpID("ALLMIND"), "Legs"),
  weaponCreate("RC-2000 SPRING CHICKEN", getCorpID("RAD"), "Legs"),
  weaponCreate("LG-033M VERRILL", getCorpID("BALAM"), "Legs"),
  weaponCreate("VP-424", getCorpID("ARQUEBUS CORP"), "Legs"),
  weaponCreate("LG-022T BORNEMISSZA", getCorpID("BALAM"), "Legs"),
  weaponCreate("VE-42B", getCorpID("ARQUEBUS CORP"), "Legs"),
  weaponCreate("EL-TL-11", getCorpID("ELCANO FOUNDRY"), "Legs"),
];

exports.boosterPartParams = [
  weaponCreate("AB-J-137 KIKAKU", getCorpID("BAWS"), "Boosters"),
  weaponCreate("BST-G2/P04", getCorpID("FURLONG DYNAMICS"), "Boosters"),
  weaponCreate("BST-G1/P10", getCorpID("FURLONG DYNAMICS"), "Boosters"),
  weaponCreate("BST-G2/P06SPD", getCorpID("FURLONG DYNAMICS"), "Boosters"),
  weaponCreate("ALULA/21E", getCorpID("SCHNEIDER"), "Boosters"),
  weaponCreate("FLUEGEL", getCorpID("SCHNEIDER"), "Boosters"),
  weaponCreate("BUERZEL/21D", getCorpID("SCHNEIDER"), "Boosters"),
  weaponCreate("BC-0600 12345", getCorpID("RAD"), "Boosters"),
  weaponCreate("BC-0400 MULE", getCorpID("RAD"), "Boosters"),
  weaponCreate("BC-0200 GRIDWALKER", getCorpID("RAD"), "Boosters"),
  weaponCreate(
    "IA-C01B: GILLS",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Boosters"
  ),
  weaponCreate(
    "IB-C03B: NGI 001",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Boosters"
  ),
];

exports.fcsPartParams = [
  weaponCreate("FCS-G1/P01", getCorpID("FURLONG DYNAMICS"), "FCS"),
  weaponCreate("FCS-G2/P05", getCorpID("FURLONG DYNAMICS"), "FCS"),
  weaponCreate("FCS-G2/P10SLT", getCorpID("FURLONG DYNAMICS"), "FCS"),
  weaponCreate("FCS-G2/P12SML", getCorpID("FURLONG DYNAMICS"), "FCS"),
  weaponCreate("FC-006 ABBOT", getCorpID("BALAM"), "FCS"),
  weaponCreate("FC-008 TALBOT", getCorpID("BALAM"), "FCS"),
  weaponCreate("VE-21A", getCorpID("ARQUEBUS CORP"), "FCS"),
  weaponCreate("VE-21B", getCorpID("ARQUEBUS CORP"), "FCS"),
  weaponCreate(
    "IA-C01F: OCELLUS",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "FCS"
  ),
  weaponCreate(
    "IB-C03F: WLT 001",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "FCS"
  ),
];

exports.generatorPartParams = [
  weaponCreate("AG-J-098 JOSO", getCorpID("BAWS"), "Generator"),
  weaponCreate("AG-E-013 YABA", getCorpID("BAWS"), "Generator"),
  weaponCreate("AG-T-005 HOKUSHI", getCorpID("BAWS"), "Generator"),
  weaponCreate("DF-GN-02 LING-TAI", getCorpID("DAFENG"), "Generator"),
  weaponCreate("DF-GN-06 MING-TANG", getCorpID("DAFENG"), "Generator"),
  weaponCreate("DF-GN-08 SAN-TAI", getCorpID("DAFENG"), "Generator"),
  weaponCreate("VP-20S", getCorpID("ARQUEBUS CORP"), "Generator"),
  weaponCreate("VP-20C", getCorpID("ARQUEBUS CORP"), "Generator"),
  weaponCreate("VP-20D", getCorpID("ARQUEBUS CORP"), "Generator"),
  weaponCreate("VE-20A", getCorpID("ARQUEBUS CORP"), "Generator"),
  weaponCreate("VE-20B", getCorpID("ARQUEBUS CORP"), "Generator"),
  weaponCreate("VE-20C", getCorpID("ARQUEBUS CORP"), "Generator"),
  weaponCreate(
    "IA-C01G: AORTA",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Generator"
  ),
  weaponCreate(
    "IB-C03B: NGI 000",
    getCorpID("RUBICON RESEARCH INSTITUTE"),
    "Generator"
  ),
];
