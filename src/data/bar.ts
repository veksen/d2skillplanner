import { IKlass } from './klass'

// tslint:disable object-literal-sort-keys
export const bar: IKlass = {
  short: 'bar',
  long: 'Barbarian',
  remainingSkills: 0,
  trees: [
    {
      name: 'warcries',
      skills: {
        howl: {
          preReqOf: ['taunt', 'shout'],
          row: 1,
          col: 1,
        },
        findPotion: {
          preReqOf: ['findItem'],
          row: 1,
          col: 3,
        },
        taunt: {
          preReqs: ['howl'],
          preReqOf: ['battleCry'],
          row: 2,
          col: 1,
        },
        shout: {
          preReqs: ['howl'],
          preReqOf: ['battleOrders'],
          row: 2,
          col: 2,
        },
        findItem: {
          preReqs: ['findPotion'],
          preReqOf: ['grimWard'],
          row: 3,
          col: 3,
        },
        battleCry: {
          preReqs: ['taunt'],
          preReqOf: ['warCry'],
          row: 4,
          col: 1,
        },
        battleOrders: {
          preReqs: ['shout'],
          preReqOf: ['warCry', 'battleCommand'],
          row: 5,
          col: 2,
        },
        grimWard: {
          preReqs: ['findItem'],
          row: 5,
          col: 3,
        },
        warCry: {
          preReqs: ['battleCry', 'battleOrders'],
          row: 6,
          col: 1,
        },
        battleCommand: {
          preReqs: ['battleOrders'],
          row: 6,
          col: 2,
        },
      },
    },
    {
      name: 'masteries',
      skills: {
        swordMastery: {
          row: 1,
          col: 1,
        },
        axeMastery: {
          row: 1,
          col: 2,
        },
        maceMastery: {
          row: 1,
          col: 3,
        },
        polearmMastery: {
          row: 2,
          col: 1,
        },
        throwingMastery: {
          row: 2,
          col: 2,
        },
        spearMastery: {
          row: 2,
          col: 3,
        },
        increasedStamina: {
          preReqOf: ['increasedSpeed'],
          row: 3,
          col: 1,
        },
        ironSkin: {
          preReqOf: ['naturalResistances'],
          row: 4,
          col: 3,
        },
        increasedSpeed: {
          preReqs: ['increasedStamina'],
          row: 5,
          col: 1,
        },
        naturalResistances: {
          preReqs: ['ironSkin'],
          row: 6,
          col: 3,
        },
      },
    },
    {
      name: 'bcombat',
      skills: {
        bash: {
          preReqOf: ['stun', 'doubleSwing'],
          row: 1,
          col: 2,
        },
        leap: {
          preReqOf: ['leapAttack'],
          row: 2,
          col: 1,
        },
        doubleSwing: {
          preReqs: ['bash'],
          preReqOf: ['doubleThrow'],
          row: 2,
          col: 3,
        },
        stun: {
          preReqs: ['bash'],
          preReqOf: ['concentrate'],
          row: 3,
          col: 2,
        },
        doubleThrow: {
          preReqs: ['doubleSwing'],
          preReqOf: ['frenzy'],
          row: 3,
          col: 3,
        },
        leapAttack: {
          preReqs: ['leap'],
          preReqOf: ['whirlwind'],
          row: 4,
          col: 1,
        },
        concentrate: {
          preReqs: ['stun'],
          preReqOf: ['berserk', 'frenzy'],
          row: 4,
          col: 2,
        },
        frenzy: {
          preReqs: ['concentrate', 'doubleThrow'],
          row: 5,
          col: 3,
        },
        whirlwind: {
          preReqs: ['leapAttack', 'concentrate'],
          row: 6,
          col: 1,
        },
        berserk: {
          preReqs: ['concentrate'],
          row: 6,
          col: 2,
        },
      },
    },
  ],
}
