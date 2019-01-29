import { IKlass } from './klass'

// tslint:disable object-literal-sort-keys
export const sor: IKlass = {
  short: 'sor',
  long: 'Sorceress',
  remainingSkills: 0,
  trees: [
    {
      name: 'cold',
      skills: {
        iceBolt: {
          preReqOf: ['iceBlast'],
          row: 1,
          col: 2,
        },
        frozenArmor: {
          preReqOf: ['shiverArmor'],
          row: 1,
          col: 3,
        },
        frostNova: {
          preReqOf: ['blizzard'],
          row: 2,
          col: 1,
        },
        iceBlast: {
          preReqs: ['iceBolt'],
          preReqOf: ['glacialSpike', 'shiverArmor'],
          row: 2,
          col: 2,
        },
        shiverArmor: {
          preReqs: ['frozenArmor', 'iceBlast'],
          preReqOf: ['chillingArmor'],
          row: 3,
          col: 3,
        },
        glacialSpike: {
          preReqs: ['iceBlast'],
          preReqOf: ['blizzard'],
          row: 4,
          col: 2,
        },
        blizzard: {
          preReqs: ['frostNova', 'glacialSpike'],
          preReqOf: ['frozenOrb'],
          row: 5,
          col: 1,
        },
        chillingArmor: {
          preReqs: ['shiverArmor'],
          row: 5,
          col: 3,
        },
        frozenOrb: {
          preReqs: ['blizzard'],
          row: 6,
          col: 1,
        },
        coldMastery: {
          row: 6,
          col: 2,
        },
      },
    },
    {
      name: 'lite',
      skills: {
        chargedBolt: {
          preReqOf: ['lightning'],
          row: 1,
          col: 2,
        },
        staticField: {
          preReqOf: ['nova'],
          row: 2,
          col: 1,
        },
        telekinesis: {
          preReqOf: ['teleport'],
          row: 2,
          col: 3,
        },
        nova: {
          preReqs: ['staticField'],
          preReqOf: ['thunderStorm'],
          row: 3,
          col: 1,
        },
        lightning: {
          preReqs: ['chargedBolt'],
          preReqOf: ['chainLightning'],
          row: 3,
          col: 2,
        },
        chainLightning: {
          preReqs: ['lightning'],
          preReqOf: ['thunderStorm', 'energyShield'],
          row: 4,
          col: 2,
        },
        teleport: {
          preReqs: ['telekinesis'],
          preReqOf: ['energyShield'],
          row: 4,
          col: 3,
        },
        thunderStorm: {
          preReqs: ['nova', 'chainLightning'],
          row: 5,
          col: 1,
        },
        energyShield: {
          preReqs: ['chainLightning', 'teleport'],
          row: 5,
          col: 3,
        },
        lightningMastery: {
          row: 6,
          col: 2,
        },
      },
    },
    {
      name: 'fire',
      skills: {
        fireBolt: {
          preReqOf: ['fireBall'],
          row: 1,
          col: 2,
        },
        warmth: {
          preReqOf: ['enchant'],
          row: 1,
          col: 3,
        },
        inferno: {
          preReqOf: ['blaze'],
          row: 2,
          col: 1,
        },
        blaze: {
          preReqs: ['inferno'],
          preReqOf: ['fireWall'],
          row: 3,
          col: 1,
        },
        fireBall: {
          preReqs: ['fireBolt'],
          preReqOf: ['meteor', 'enchant'],
          row: 3,
          col: 2,
        },
        fireWall: {
          preReqs: ['blaze'],
          preReqOf: ['meteor'],
          row: 4,
          col: 1,
        },
        enchant: {
          preReqs: ['fireBall', 'warmth'],
          preReqOf: ['hydra'],
          row: 4,
          col: 3,
        },
        meteor: {
          preReqs: ['fireWall', 'fireBall'],
          row: 5,
          col: 2,
        },
        fireMastery: {
          row: 6,
          col: 2,
        },
        hydra: {
          preReqs: ['enchant'],
          row: 6,
          col: 3,
        },
      },
    },
  ],
}
