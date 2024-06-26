const mongoose = require("mongoose");
const { Schema } = mongoose;

const WeaponSchema = new Schema({
  name: { type: String, minLength: 2, required: true },
  attached_to: { type: String, enum: ["Arms", "Back"], required: true },
  part_class: {
    type: String,
    enum: [
      //arm weapons
      "Pile Bunker",
      "Explosive Thrower",
      "Chainsaw",
      "Stun Baton",
      "Laser Dagger",
      "Laser Blade",
      "Laser Slicer",
      "Laser Lance",
      "Plasma Thrower",
      "Pulse Blade",
      "Light Wave Blade",
      "Coral Oscillator",
      "Burst Rifle",
      "Linear Rifle",
      "Assault Rifle",
      "Burst Assault Rifle",
      "Machine Gun",
      "Burst Machine Gun",
      "Gatling Gun",
      "Shotgun",
      "Handgun",
      "Burst Handgun",
      "Needle Gun",
      "Stun Gun",
      "Bazooka",
      "Detonating Bazooka",
      "Grenade Launcher",
      "Napalm Bomb Launcher",
      "Jamming Bomb Launcher",
      "Stun Bomb Launcher",
      "Flamethrower",
      "Laser Rifle",
      "Laser Shotgun",
      "Laser Handgun",
      "Plasma Rifle",
      "Coral Rifle",
      "Multi Energy Rifle",
      "Pulse Gun",
      "Missile Launcher",
      "Split Missile Launcher",
      "Siege Missile Launcher",

      //back weapons
      "Pulse Shield",
      "Pulse Buckler",
      "Pulse Scutum",
      "Coral Shield",
      "Spread Bazooka",
      "Grenade Cannon",
      "Stun Needle Launcher",
      "Laser Cannon",
      "Diffuse Laser Cannon",
      "Plasma Cannon",
      "Pulse Cannon",
      "Pulse Shield Launcher",
      "Light Wave Cannon",
      "Split Missle Launcher",
      "Dual Missile Launcher",
      "Vertical Missile Launcher",
      "Active Homing Missile Launcher",
      "Container Missile Launcher",
      "Cluster Missile Launcher",
      "Scatter Missile Launcher",
      "Detonating Missile Launcher",
      "Needle Missle Launcher",
      "Plasma Missile Launcher",
      "Coral Missile Launcher",
      "Bullet Orbit",
      "Laser Orbit",
      "Laser Turret",
      "Laser Drone",
    ],
    required: true,
  },
  attack_type: {
    type: String,
    enum: ["Kinetic", "Explosive", "Energy", "Coral"],
    required: true,
  },
  weapon_type: {
    type: String,
    enum: [
      "Melee",
      "Semi-Auto",
      "Full-Auto",
      "Burst",
      "Charge",
      "Homing",
      "Shield",
    ],
    required: true,
  },
  reload_type: {
    type: String,
    enum: ["Overheat", "Single Shot", "Magazine"],
    required: true,
  },
  additional_effects: { type: String, enum: ["None", "Shock", "ACS Failure", "Camera Disruption"], required: true },
  manufacturer: {
    type: Schema.Types.ObjectId,
    ref: "Corporation",
    required: true,
  },
});

WeaponSchema.virtual("url").get(function () {
  return `/catalog/weapon/${this._id}`;
});

WeaponSchema.virtual("partClassEnum").get(function () {

  this.part_class.

  return ;
});


module.exports = mongoose.model("Weapon", WeaponSchema);
