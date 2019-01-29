import { IKlass } from './klass'

// tslint:disable object-literal-sort-keys
export const zon: IKlass = {
  short: 'zon',
  long: 'Amazon',
  remainingSkills: 0,
  trees: [
    {
      name: 'jav',
      skills: {
        jab: {
          preReqOf: ['powerStrike', 'impale'],
          // desc: 'creates a magical arrow or bolt that does extra damage',
          row: 1,
          col: 1,
          // prop: {
          //   dmg: {
          //     formula: 'formula dmg',
          //     tpl: 'Damage: +%dmg%',
          //     1: 1,
          //     2: 2,
          //     3: 3,
          //     4: 5,
          //     5: 5,
          //   },
          //   ar: {
          //     formula: 'formula ar',
          //     tpl: 'To Attack Rating: +%ar% percent',
          //     1: 10,
          //     2: 19,
          //     3: 28,
          //     4: 37,
          //     5: 46,
          //   },
          //   mana: {
          //     formula: 'formula mana',
          //     tpl: 'Mana Cost +%mana%',
          //     1: 1.5,
          //     2: 1.3,
          //     3: 1.2,
          //     4: 1.1,
          //     5: 1,
          //   },
          // },
        },
        powerStrike: {
          preReqs: ['jab'],
          preReqOf: ['chargedStrike'],
          row: 2,
          col: 2,
        },
        poisonJavelin: {
          preReqOf: ['lightningBolt'],
          row: 2,
          col: 3,
        },
        impale: {
          preReqs: ['jab'],
          preReqOf: ['fend'],
          row: 3,
          col: 1,
        },
        lightningBolt: {
          preReqs: ['poisonJavelin'],
          preReqOf: ['chargedStrike', 'plagueJavelin'],
          row: 3,
          col: 3,
        },
        chargedStrike: {
          preReqs: ['powerStrike', 'lightningBolt'],
          preReqOf: ['lightningStrike'],
          row: 4,
          col: 2,
        },
        plagueJavelin: {
          preReqs: ['lightningBolt'],
          preReqOf: ['lightningFury'],
          row: 4,
          col: 3,
        },
        fend: {
          preReqs: ['impale'],
          row: 5,
          col: 1,
        },
        lightningStrike: {
          preReqs: ['chargedStrike'],
          row: 6,
          col: 2,
        },
        lightningFury: {
          preReqs: ['plagueJavelin'],
          row: 6,
          col: 3,
        },
      },
    },
    {
      name: 'passive',
      skills: {
        innerSight: {
          preReqOf: ['slowMissiles'],
          row: 1,
          col: 1,
        },
        dodge: {
          preReqOf: ['avoid'],
          row: 2,
          col: 2,
        },
        criticalStrike: {
          preReqOf: ['penetrate'],
          row: 1,
          col: 3,
        },
        slowMissiles: {
          preReqs: ['innerSight'],
          preReqOf: ['decoy'],
          row: 3,
          col: 1,
        },
        avoid: {
          preReqs: ['dodge'],
          preReqOf: ['evade'],
          row: 3,
          col: 2,
        },
        penetrate: {
          preReqs: ['criticalStrike'],
          preReqOf: ['pierce'],
          row: 4,
          col: 3,
        },
        decoy: {
          preReqs: ['slowMissiles'],
          preReqOf: ['valkyrie'],
          row: 5,
          col: 1,
        },
        evade: {
          preReqs: ['avoid'],
          preReqOf: ['valkyrie'],
          row: 5,
          col: 2,
        },
        valkyrie: {
          preReqs: ['decoy', 'evade'],
          row: 6,
          col: 1,
        },
        pierce: {
          preReqs: ['penetrate'],
          row: 6,
          col: 3,
        },
      },
    },
    {
      name: 'bow',
      skills: {
        magicArrow: {
          preReqOf: ['multipleShot'],
          row: 1,
          col: 2,
        },
        fireArrow: {
          preReqOf: ['explodingArrow'],
          row: 1,
          col: 3,
        },
        coldArrow: {
          preReqOf: ['iceArrow', 'guidedArrow'],
          row: 2,
          col: 1,
        },
        multipleShot: {
          preReqs: ['magicArrow'],
          preReqOf: ['explodingArrow', 'iceArrow'],
          row: 2,
          col: 2,
        },
        explodingArrow: {
          preReqs: ['fireArrow', 'multipleShot'],
          preReqOf: ['strafe'],
          row: 3,
          col: 3,
        },
        iceArrow: {
          preReqs: ['coldArrow'],
          preReqOf: ['freezingArrow'],
          row: 4,
          col: 1,
        },
        guidedArrow: {
          preReqs: ['coldArrow', 'multipleShot'],
          preReqOf: ['immolationArrow'],
          row: 4,
          col: 2,
        },
        immolationArrow: {
          preReqs: ['guidedArrow'],
          row: 5,
          col: 2,
        },
        strafe: {
          preReqs: ['explodingArrow'],
          row: 5,
          col: 3,
        },
        freezingArrow: {
          preReqs: ['iceArrow'],
          row: 6,
          col: 1,
        },
      },
    },
  ],
}
