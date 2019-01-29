import { IKlass } from './klass'

// tslint:disable object-literal-sort-keys
export const sin: IKlass = {
  short: 'sin',
  long: 'Assassin',
  remainingSkills: 0,
  trees: [
    {
      name: 'ma',
      skills: {
        tigerStrike: {
          preReqOf: ['cobraStrike'],
          row: 1,
          col: 2,
        },
        dragonTalon: {
          preReqOf: ['dragonClaw'],
          row: 1,
          col: 3,
        },
        fistsOfFire: {
          preReqOf: ['clawsOfThunder'],
          row: 2,
          col: 1,
        },
        dragonClaw: {
          preReqs: ['dragonTalon'],
          preReqOf: ['dragonTail'],
          row: 2,
          col: 3,
        },
        cobraStrike: {
          preReqs: ['tigerStrike'],
          preReqOf: ['phoenixStrike'],
          row: 3,
          col: 2,
        },
        clawsOfThunder: {
          preReqs: ['fistsOfFire'],
          preReqOf: ['bladesOfIce'],
          row: 4,
          col: 1,
        },
        dragonTail: {
          preReqs: ['dragonClaw'],
          preReqOf: ['dragonFlight'],
          row: 4,
          col: 3,
        },
        bladesOfIce: {
          preReqs: ['clawsOfThunder'],
          preReqOf: ['phoenixStrike'],
          row: 5,
          col: 1,
        },
        dragonFlight: {
          preReqs: ['dragonTail'],
          row: 5,
          col: 3,
        },
        phoenixStrike: {
          preReqs: ['bladesOfIce', 'cobraStrike'],
          row: 6,
          col: 2,
        },
      },
    },
    {
      name: 'shadow',
      skills: {
        clawMastery: {
          preReqOf: ['burstOfSpeed', 'weaponBlock'],
          row: 1,
          col: 2,
        },
        psychicHammer: {
          preReqOf: ['cloakOfShadows'],
          row: 1,
          col: 3,
        },
        burstOfSpeed: {
          preReqs: ['clawMastery'],
          preReqOf: ['fade'],
          row: 2,
          col: 1,
        },
        weaponBlock: {
          preReqs: ['clawMastery'],
          preReqOf: ['shadowWarrior'],
          row: 3,
          col: 2,
        },
        cloakOfShadows: {
          preReqs: ['psychicHammer'],
          preReqOf: ['mindBlast', 'shadowWarrior'],
          row: 3,
          col: 3,
        },
        fade: {
          preReqs: ['burstOfSpeed'],
          preReqOf: ['venom'],
          row: 4,
          col: 1,
        },
        shadowWarrior: {
          preReqs: ['cloakOfShadows', 'weaponBlock'],
          preReqOf: ['shadowMaster'],
          row: 4,
          col: 2,
        },
        mindBlast: {
          preReqs: ['cloakOfShadows'],
          row: 5,
          col: 3,
        },
        venom: {
          preReqs: ['fade'],
          row: 6,
          col: 1,
        },
        shadowMaster: {
          preReqs: ['shadowWarrior'],
          row: 6,
          col: 2,
        },
      },
    },
    {
      name: 'traps',
      skills: {
        fireBlast: {
          preReqOf: ['shockWeb', 'wakeOfFire'],
          row: 1,
          col: 2,
        },
        shockWeb: {
          preReqs: ['fireBlast'],
          preReqOf: ['chargedBoltSentry'],
          row: 2,
          col: 1,
        },
        bladeSentinel: {
          preReqOf: ['bladeFury'],
          row: 2,
          col: 3,
        },
        chargedBoltSentry: {
          preReqs: ['shockWeb'],
          preReqOf: ['lightningSentry'],
          row: 3,
          col: 1,
        },
        wakeOfFire: {
          preReqs: ['fireBlast'],
          preReqOf: ['bladeFury', 'wakeOfInferno'],
          row: 3,
          col: 2,
        },
        bladeFury: {
          preReqs: ['wakeOfFire', 'bladeSentinel'],
          preReqOf: ['bladeShield'],
          row: 4,
          col: 3,
        },
        lightningSentry: {
          preReqs: ['chargedBoltSentry'],
          preReqOf: ['deathSentry'],
          row: 5,
          col: 1,
        },
        wakeOfInferno: {
          preReqs: ['wakeOfFire'],
          row: 5,
          col: 2,
        },
        deathSentry: {
          preReqs: ['lightningSentry'],
          row: 6,
          col: 1,
        },
        bladeShield: {
          preReqs: ['bladeFury'],
          row: 6,
          col: 3,
        },
      },
    },
  ],
}
