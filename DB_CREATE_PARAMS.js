const Corporation = require("./models/coporation");
const Weapon = require("./models/weapon");
const Part = require("./models/part");

exports.armsWeaponParams = [
  [
    "PB-033m ASHMEAD",
    "Arms",
    "Pile Bunker",
    "Kinetic",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "DF-ET09 TAI-YANG-SHOU",
    "Arms",
    "Explosive Thrower",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "DAFENG" }),
  ],
  [
    "WB-0010 DOUBLE TROUBLE",
    "Arms",
    "Chainsaw",
    "Kinetic",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "RAD" }),
  ],
  [
    "VP-67EB",
    "Arms",
    "Stun Baton",
    "Kinetic",
    "Melee",
    "Overheat",
    "Shock",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "VP-67LD",
    "Arms",
    "Laser Dagger",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "Vvc-770LB",
    "Arms",
    "Laser Blade",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "VCPL" }),
  ],
  [
    "Vvc-774LS",
    "Arms",
    "Laser Slicer",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "VCPL" }),
  ],
  [
    "VE-67LLA",
    "Arms",
    "Laser Lance",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "44-143 HMMR",
    "Arms",
    "Plasma Thrower",
    "Kinetic",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ALLMIND" }),
  ],
  [
    "HI-32: BU-TT/A",
    "Arms",
    "Pulse Blade",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "TAKIGAWA" }),
  ],
  [
    "IA-C01W2: MOONLIGHT",
    "Arms",
    "Light Wave Blade",
    "Energy",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
  ],
  [
    "IA-C01W7: ML-REDSHIFT",
    "Arms",
    "Coral Oscillator",
    "Coral",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
  ],
  [
    "IB-C03W2: WLT 101",
    "Arms",
    "Coral Oscillator",
    "Coral",
    "Melee",
    "Overheat",
    "None",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
  ],
  [
    "MA-J-200 RANSETSU-RF",
    "Arms",
    "Burst Rifle",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BAWS" }),
  ],
  [
    "LR-036 CURTIS",
    "Arms",
    "Linear Rifle",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "LR-037 HARRIS",
    "Arms",
    "Linear Rifle",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "RF-024 TURNER",
    "Arms",
    "Assault Rifle",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "RF-025 SCUDDER",
    "Arms",
    "Assault Rifle",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "MA-J-201 RANSETSU-AR",
    "Arms",
    "Burst Assault Rifle",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BAWS" }),
  ],
  [
    "MG-014 LUDLOW",
    "Arms",
    "Machine Gun",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "DF-MG-02 CHANG-CHEN",
    "Arms",
    "Machine Gun",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "DAFENG" }),
  ],
  [
    "MA-E-210 ETSUJIN",
    "Arms",
    "Burst Machine Gun",
    "Kinetic",
    "Full-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BAWS" }),
  ],
  [
    "DF-GA-08 HU-BEN",
    "Arms",
    "Gatling Gun",
    "Kinetic",
    "Full-Auto",
    "Overheat",
    "None",
    Corporation.findOne({ name: "DAFENG" }),
  ],
  [
    "SG-026 HALDEMAN",
    "Arms",
    "Shotgun",
    "Kinetic",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "SG-027 ZIMMERMAN",
    "Arms",
    "Shotgun",
    "Kinetic",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "WR-0777 SWEET SIXTEEN",
    "Arms",
    "Shotgun",
    "Kinetic",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "RAD" }),
  ],
  [
    "HG-003 COQUILLETT",
    "Arms",
    "Handgun",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "HG-004 DUCKETT",
    "Arms",
    "Handgun",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "MA-E-211 SAMPU",
    "Arms",
    "Burst Handgun",
    "Kinetic",
    "Burst",
    "Magazine",
    "None",
    Corporation.findOne({ name: "BAWS" }),
  ],
  [
    "EL-PW-00 VIENTO",
    "Arms",
    "Needle Gun",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "ELCANO FOUNDRY" }),
  ],
  [
    "VP-66EG",
    "Arms",
    "Stun Gun",
    "Kinetic",
    "Semi-Auto",
    "Magazine",
    "Shock",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "DF-BA-06 XUAN-GE",
    "Arms",
    "Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "DAFENG" }),
  ],
  [
    "MAJESTIC",
    "Arms",
    "Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "MELINITE" }),
  ],
  [
    "LITTLE GEM",
    "Arms",
    "Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "MELINITE" }),
  ],
  [
    "44-141 JVLN ALPHA",
    "Arms",
    "Detonating Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "ALLMIND" }),
  ],
  [
    "DF-GR-07 GOU-CHEN",
    "Arms",
    "Grenade Launcher",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "DAFENG" }),
  ],
  [
    "DIZZY",
    "Arms",
    "Grenade Launcher",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "MELINITE" }),
  ],
  [
    "IRIDIUM",
    "Arms",
    "Grenade Launcher",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "MELINITE" }),
  ],
  [
    "MA-T-222 KYORAI",
    "Arms",
    "Napalm Bomb Launcher",
    "Explosive",
    "Charge",
    "Single Shot",
    "ACS Failure",
    Corporation.findOne({ name: "BAWS" }),
  ],
  [
    "MA-T-223 KYORIKU",
    "Arms",
    "Jamming Bomb Launcher",
    "Kinetic",
    "Charge",
    "Single Shot",
    "Camera Disruption",
    Corporation.findOne({ name: "BAWS" }),
  ],
  [
    "WS-1200 THERAPIST",
    "Arms",
    "Stun Bomb Launcher",
    "Energy",
    "Charge",
    "Magazine",
    "Shock",
    Corporation.findOne({ name: "RAD" }),
  ],
  [
    "WB-0000 BAD COOK",
    "Arms",
    "Flamethrower",
    "Explosive",
    "Full-Auto",
    "Overheat",
    "ACS Failure",
    Corporation.findOne({ name: "RAD" }),
  ],
  [
    "VP-66LR",
    "Arms",
    "Laser Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "VE-66LRA",
    "Arms",
    "Laser Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "VE-66LRB",
    "Arms",
    "Laser Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "WUERGER/66E",
    "Arms",
    "Laser Shotgun",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "SCHNEIDER" }),
  ],
  [
    "VP-66LS",
    "Arms",
    "Laser Shotgun",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "VP-66LH",
    "Arms",
    "Laser Handgun",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "Vvc-760PR",
    "Arms",
    "Plasma Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "VCPL" }),
  ],
  [
    "IA-C01W1: NEBULA",
    "Arms",
    "Plasma Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
  ],
  [
    "IA-C01W6: NB-REDSHIFT",
    "Arms",
    "Coral Rifle",
    "Coral",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
  ],
  [
    "IB-C03W1: WLT 011",
    "Arms",
    "Coral Rifle",
    "Coral",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
  ],
  [
    "44-142 KRSV",
    "Arms",
    "Multi Energy Rifle",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ALLMIND" }),
  ],
  [
    "HI-16: GU-Q1",
    "Arms",
    "Pulse Gun",
    "Energy",
    "Full-Auto",
    "Overheat",
    "None",
    Corporation.findOne({ name: "TAKIGAWA" }),
  ],
  [
    "HI-18: GU-A2",
    "Arms",
    "Pulse Gun",
    "Energy",
    "Full-Auto",
    "Overheat",
    "None",
    Corporation.findOne({ name: "TAKIGAWA" }),
  ],
  [
    "HML-G2/P19MLT-04",
    "Arms",
    "Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "HML-G3/P08SPL-06",
    "Arms",
    "Split Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "WS-5000 APERITIF",
    "Arms",
    "Siege Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "RAD" }),
  ],
];

exports.backWeaponParams = [
  [
    "VP-61PS",
    "Back",
    "Pulse Shield",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "SI-24: SU-Q5",
    "Back",
    "Pulse Shield",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    Corporation.findOne({ name: "TAKIGAWA" }),
  ],
  [
    "SI-27: SU-R8",
    "Back",
    "Pulse Shield",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    Corporation.findOne({ name: "TAKIGAWA" }),
  ],
  [
    "VP-61PB",
    "Back",
    "Pulse Buckler",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "SI-29:SU-TT/C",
    "Back",
    "Pulse Bucker",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    Corporation.findOne({ name: "TAKIGAWA" }),
  ],
  [
    "VE-61PSA",
    "Back",
    "Pulse Scutum",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "IB-C03W4: NGI 028",
    "Back",
    "Coral Shield",
    "Kinetic",
    "Shield",
    "Overheat",
    "None",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
  ],
  [
    "SB-033M MORLEY",
    "Back",
    "Spread Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "EARSHOT",
    "Back",
    "Spread Bazooka",
    "Explosive",
    "Semi-Auto",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "SONGBIRDS",
    "Back",
    "Grenade Cannon",
    "Explosive",
    "Burst",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "MELINITE" }),
  ],
  [
    "VE-60SNA",
    "Back",
    "Stun Needle Launcher",
    "Kinetic",
    "Semi-Auto",
    "Single Shot",
    "Shock",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "VP-60LCS",
    "Back",
    "Laser Cannon",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "VE-60LCA",
    "Back",
    "Laser Cannon",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "VP-60LCD",
    "Back",
    "Diffuse Laser Cannon",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "FASAN/60E",
    "Back",
    "Plasma Cannon",
    "Energy",
    "Charge",
    "Overheat",
    "None",
    Corporation.findOne({ name: "SCHNEIDER" }),
  ],
  [
    "KRANICH/60Z",
    "Back",
    "Pulse Cannon",
    "Energy",
    "Full-Auto",
    "Overheat",
    "None",
    Corporation.findOne({ name: "SCHNEIDER" }),
  ],
  [
    "EULE/60D",
    "Back",
    "Pulse Shield Launcher",
    "Energy",
    "Semi-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "SCHNEIDER" }),
  ],
  [
    "IA-C01W3: AURORA",
    "Back",
    "Light Wave Cannon",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
  ],
  [
    "BML-G1/P20MLT-04",
    "Back",
    "Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G2/P03MLT-06",
    "Back",
    "Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G2/P05MLT-10",
    "Back",
    "Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G2/P19SPL-12",
    "Back",
    "Split Missle Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G2/P16SPL-08",
    "Back",
    "Split Missle Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G2/P17SPL-16",
    "Back",
    "Split Missle Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G1/P31DUO-02",
    "Back",
    "Dual Missile Launcher",
    "Explosive",
    "Homing",
    "Magazine",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G1/P32DUO-03",
    "Back",
    "Dual Missile Launcher",
    "Explosive",
    "Homing",
    "Magazine",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G2/P08DUO-03",
    "Back",
    "Dual Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G1/P01VTC-04",
    "Back",
    "Vertical Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G1/P03VTC-08",
    "Back",
    "Vertical Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G1/P07VTC-12",
    "Back",
    "Vertical Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G3/P04ACT-01",
    "Back",
    "Active Homing Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G3/P05ACT-02",
    "Back",
    "Active Homing Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "BML-G1/P29CNT",
    "Back",
    "Container Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
  ],
  [
    "WR-0999 DELIVERY BOY",
    "Back",
    "Cluster Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "RAD" }),
  ],
  [
    "WS-5001 SOUP",
    "Back",
    "Scatter Missile Launcher",
    "Explosive",
    "Homing",
    "Magazine",
    "None",
    Corporation.findOne({ name: "RAD" }),
  ],
  [
    "45-091 JVLN BETA",
    "Back",
    "Detonating Missile Launcher",
    "Explosive",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "ALLMIND" }),
  ],
  [
    "EL-PW-01 TRUENO",
    "Back",
    "Needle Missle Launcher",
    "Kinetic",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "ELCANO FOUNDRY" }),
  ],
  [
    "Vvc-703PM",
    "Back",
    "Plasma Missile Launcher",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "VCPL" }),
  ],
  [
    "Vvc-706PM",
    "Back",
    "Plasma Missile Launcher",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "VCPL" }),
  ],
  [
    "Vvc-70PM",
    "Back",
    "Plasma Missile Launcher",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "VCPL" }),
  ],
  [
    "IB-C03W3: NGI 006",
    "Back",
    "Coral Missile Launcher",
    "Coral",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
  ],
  [
    "BO-044 HUXLEY",
    "Back",
    "Bullet Orbit",
    "Kinetic",
    "Burst",
    "Overheat",
    "None",
    Corporation.findOne({ name: "BALAM" }),
  ],
  [
    "45-091 ORBT",
    "Back",
    "Laser Orbit",
    "Energy",
    "Burst",
    "Overheat",
    "None",
    Corporation.findOne({ name: "ALLMIND" }),
  ],
  [
    "VP-60LT",
    "Back",
    "Laser Turret",
    "Energy",
    "Semi-Auto",
    "Magazine",
    "None",
    Corporation.findOne({ name: "ARQUEBUS CORP" }),
  ],
  [
    "Vvc-700LD",
    "Back",
    "Laser Drone",
    "Energy",
    "Homing",
    "Single Shot",
    "None",
    Corporation.findOne({ name: "VCPL" }),
  ],
];

exports.headPartParams = [
  ["AH-J-124 BASHO", Corporation.findOne({ name: "BAWS" }), "Head"],
  ["AH-J-124/RC JAILBREAK", Corporation.findOne({ name: "BAWS" }), "Head"],
  ["HD-011 MELANDER", Corporation.findOne({ name: "BALAM" }), "Head"],
  ["HD-033M VERRILL", Corporation.findOne({ name: "BALAM" }), "Head"],
  ["HD-012 MELANDER C3", Corporation.findOne({ name: "BALAM" }), "Head"],
  ["DF-HD-08 TIAN-QIANG", Corporation.findOne({ name: "DAFENG" }), "Head"],
  ["VP-44S", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Head"],
  ["VP-44D", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Head"],
  ["NACHTREIHER/44E", Corporation.findOne({ name: "SCHNEIDER" }), "Head"],
  ["KASUAR/44Z", Corporation.findOne({ name: "SCHNEIDER" }), "Head"],
  ["VE-44A", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Head"],
  ["VE-44B", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Head"],
  ["HC-2000 FINDER EYE", Corporation.findOne({ name: "RAD" }), "Head"],
  ["HC-2000/BC SHADE EYE", Corporation.findOne({ name: "RAD" }), "Head"],
  ["HC-3000 WRECKER", Corporation.findOne({ name: "RAD" }), "Head"],
  ["HS-5000 APPETIZER", Corporation.findOne({ name: "RAD" }), "Head"],
  ["EL-TH-10 FIRMEZA", Corporation.findOne({ name: "ELCANO FOUNDRY" }), "Head"],
  ["EL-PH-00 ALBA", Corporation.findOne({ name: "ELCANO FOUNDRY" }), "Head"],
  ["20-081 MIND ALPHA", Corporation.findOne({ name: "ALLMIND" }), "Head"],
  ["20-082 MIND BETA", Corporation.findOne({ name: "ALLMIND" }), "Head"],
  [
    "IA-C01H: EPHEMERA",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Head",
  ],
  [
    "IB-C03H: HAL 826",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Head",
  ],
];
exports.bodyPartParams = [
  ["AH-J-120 BASHO", Corporation.findOne({ name: "BAWS" }), "Body"],
  ["AH-J-120/RC JAILBREAK", Corporation.findOne({ name: "BAWS" }), "Body"],
  ["BD-011 MELANDER", Corporation.findOne({ name: "BALAM" }), "Body"],
  ["BD-012 MELANDER C3", Corporation.findOne({ name: "BALAM" }), "Body"],
  ["DF-BD-08 TIAN-QIANG", Corporation.findOne({ name: "DAFENG" }), "Body"],
  ["VP-40S", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Body"],
  ["NACHTREIHER/40E", Corporation.findOne({ name: "SCHNEIDER" }), "Body"],
  ["VE-40A", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Body"],
  ["CC-2000 ORBITER", Corporation.findOne({ name: "RAD" }), "Body"],
  ["CC-3000 WRECKER", Corporation.findOne({ name: "RAD" }), "Body"],
  ["CS-5000 MAIN DISH", Corporation.findOne({ name: "RAD" }), "Body"],
  ["EL-TC-10 FIRMEZA", Corporation.findOne({ name: "ELCANO FOUNDRY" }), "Body"],
  ["EL-PC-00 ALBA", Corporation.findOne({ name: "ELCANO FOUNDRY" }), "Body"],
  ["07-061 MIND ALPHA", Corporation.findOne({ name: "ALLMIND" }), "Body"],
  [
    "IA-C01C: EPHMERA",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Body",
  ],
  [
    "IB-C03C: HAL 826",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Body",
  ],
];
exports.armsPartParams = [
  ["AA-J-123 BASHO", Corporation.findOne({ name: "BAWS" }), "Arms"],
  ["AA-J-123/RC JAILBREAK", Corporation.findOne({ name: "BAWS" }), "Arms"],
  ["AR-011 MELANDER", Corporation.findOne({ name: "BALAM" }), "Arms"],
  ["AR-012 MELANDER C3", Corporation.findOne({ name: "BALAM" }), "Arms"],
  ["DF-AR-08 TIAN-QIANG", Corporation.findOne({ name: "DAFENG" }), "Arms"],
  ["DF-AR-09 TIAN-LAO", Corporation.findOne({ name: "DAFENG" }), "Arms"],
  ["VP-46S", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Arms"],
  ["VP-46D", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Arms"],
  ["NACHTREIHER/46E", Corporation.findOne({ name: "SCHNEIDER" }), "Arms"],
  ["VE-46A", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Arms"],
  ["AC-2000 TOOL ARM", Corporation.findOne({ name: "RAD" }), "Arms"],
  ["AC-3000 WRECKER", Corporation.findOne({ name: "RAD" }), "Arms"],
  ["AS-5000 SALAD", Corporation.findOne({ name: "RAD" }), "Arms"],
  ["EL-TA-10 FIRMEZA", Corporation.findOne({ name: "ELCANO FOUNDRY" }), "Arms"],
  ["EL-PA-00 ALBA", Corporation.findOne({ name: "ELCANO FOUNDRY" }), "Arms"],
  ["04-101 MIND ALPHA", Corporation.findOne({ name: "ALLMIND" }), "Arms"],
  [
    "IA-CO1A: EPHEMERA",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Arms",
  ],
  [
    "IB-C03A: HAL 826",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Arms",
  ],
];
exports.legsPartParams = [
  ["AL-J-121 BASHO", Corporation.findOne({ name: "BAWS" }), "Legs"],
  ["AL-J-121/RC JAILBREAK", Corporation.findOne({ name: "BAWS" }), "Legs"],
  ["LG-011 MELANDER", Corporation.findOne({ name: "BALAM" }), "Legs"],
  ["LG-013 MELANDER C3", Corporation.findOne({ name: "BALAM" }), "Legs"],
  ["DF-LG-08 TIAN-QIANG", Corporation.findOne({ name: "DAFENG" }), "Legs"],
  ["VP-422", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Legs"],
  ["NACHTREIHER/42E", Corporation.findOne({ name: "SCHNEIDER" }), "Legs"],
  ["VE-42A", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Legs"],
  ["2C-2000 CRAWLER", Corporation.findOne({ name: "RAD" }), "Legs"],
  ["2C-3000 WRECKER", Corporation.findOne({ name: "RAD" }), "Legs"],
  ["2S-5000 DESSERT", Corporation.findOne({ name: "RAD" }), "Legs"],
  ["EL-TL-10", Corporation.findOne({ name: "FIRMEZA" }), "Legs"],
  ["EL-PL-00 ALBA", Corporation.findOne({ name: "ELCANO FOUNDRY" }), "Legs"],
  ["06-041 MIND ALPHA", Corporation.findOne({ name: "ALLMIND" }), "Legs"],
  [
    "IA-C01L: EPHEMERA",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Legs",
  ],
  [
    "IB-C03L: HAL 826",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Legs",
  ],
  ["KASUAR/42Z", Corporation.findOne({ name: "SCHNEIDER" }), "Legs"],
  ["06-042 MIND BETA", Corporation.findOne({ name: "ALLMIND" }), "Legs"],
  ["RC-2000 SPRING CHICKEN", Corporation.findOne({ name: "RAD" }), "Legs"],
  ["LG-033M VERRILL", Corporation.findOne({ name: "BALAM" }), "Legs"],
  ["VP-424", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Legs"],
  ["LG-022T BORNEMISSZA", Corporation.findOne({ name: "BALAM" }), "Legs"],
  ["VE-42B", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Legs"],
  ["EL-TL-11", Corporation.findOne({ name: "ELCANO FOUNDRY" }), "Legs"],
];
exports.boosterPartParams = [
  ["AB-J-137 KIKAKU", Corporation.findOne({ name: "BAWS" }), "Boosters"],
  ["BST-G2/P04", Corporation.findOne({ name: "FURLONG DYNAMICS" }), "Boosters"],
  ["BST-G1/P10", Corporation.findOne({ name: "FURLONG DYNAMICS" }), "Boosters"],
  [
    "BST-G2/P06SPD",
    Corporation.findOne({ name: "FURLONG DYNAMICS" }),
    "Boosters",
  ],
  ["ALULA/21E", Corporation.findOne({ name: "SCHNEIDER" }), "Boosters"],
  ["FLUEGEL", Corporation.findOne({ name: "SCHNEIDER" }), "Boosters"],
  ["BUERZEL/21D", Corporation.findOne({ name: "SCHNEIDER" }), "Boosters"],
  ["BC-0600 12345", Corporation.findOne({ name: "RAD" }), "Boosters"],
  ["BC-0400 MULE", Corporation.findOne({ name: "RAD" }), "Boosters"],
  ["BC-0200 GRIDWALKER", Corporation.findOne({ name: "RAD" }), "Boosters"],
  [
    "IA-C01B: GILLS",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Boosters",
  ],
  [
    "IB-C03B: NGI 001",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Boosters",
  ],
];
exports.fcsPartParams = [
  ["FCS-G1/P01", Corporation.findOne({ name: "FURLONG DYNAMICS" }), "FCS"],
  ["FCS-G2/P05", Corporation.findOne({ name: "FURLONG DYNAMICS" }), "FCS"],
  ["FCS-G2/P10SLT", Corporation.findOne({ name: "FURLONG DYNAMICS" }), "FCS"],
  ["FCS-G2/P12SML", Corporation.findOne({ name: "FURLONG DYNAMICS" }), "FCS"],
  ["FC-006 ABBOT", Corporation.findOne({ name: "BALAM" }), "FCS"],
  ["FC-008 TALBOT", Corporation.findOne({ name: "BALAM" }), "FCS"],
  ["VE-21A", Corporation.findOne({ name: "ARQUEBUS CORP" }), "FCS"],
  ["VE-21B", Corporation.findOne({ name: "ARQUEBUS CORP" }), "FCS"],
  [
    "IA-C01F: OCELLUS",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "FCS",
  ],
  [
    "IB-C03F: WLT 001",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "FCS",
  ],
];
exports.generatorPartParams = [
  ["AG-J-098 JOSO", Corporation.findOne({ name: "BAWS" }), "Generator"],
  ["AG-E-013 YABA", Corporation.findOne({ name: "BAWS" }), "Generator"],
  ["AG-T-005 HOKUSHI", Corporation.findOne({ name: "BAWS" }), "Generator"],
  ["DF-GN-02 LING-TAI", Corporation.findOne({ name: "DAFENG" }), "Generator"],
  ["DF-GN-06 MING-TANG", Corporation.findOne({ name: "DAFENG" }), "Generator"],
  ["DF-GN-08 SAN-TAI", Corporation.findOne({ name: "DAFENG" }), "Generator"],
  ["VP-20S", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Generator"],
  ["VP-20C", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Generator"],
  ["VP-20D", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Generator"],
  ["VE-20A", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Generator"],
  ["VE-20B", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Generator"],
  ["VE-20C", Corporation.findOne({ name: "ARQUEBUS CORP" }), "Generator"],
  [
    "IA-C01G: AORTA",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Generator",
  ],
  [
    "IB-C03B: NGI 000",
    Corporation.findOne({ name: "RUBICON RESEARCH INSTITUTE" }),
    "Generator",
  ],
];