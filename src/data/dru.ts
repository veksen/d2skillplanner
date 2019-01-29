import { IKlass } from './klass'

// tslint:disable object-literal-sort-keys
export const dru: IKlass = {
  short: 'dru',
  long: 'Druid',
  remainingSkills: 0,
  trees: [
    {
      name: 'ele',
      skills: {
        firestorm: {
          preReqOf: ['moltenBoulder'],
          row: 1,
          col: 1,
        },
        moltenBoulder: {
          preReqs: ['firestorm'],
          preReqOf: ['fissure'],
          row: 2,
          col: 1,
        },
        arcticBlast: {
          preReqOf: ['cycloneArmor'],
          row: 2,
          col: 3,
        },
        fissure: {
          preReqs: ['moltenBoulder'],
          preReqOf: ['volcano'],
          row: 3,
          col: 1,
        },
        cycloneArmor: {
          preReqs: ['arcticBlast'],
          preReqOf: ['twister'],
          row: 3,
          col: 3,
        },
        twister: {
          preReqs: ['cycloneArmor'],
          preReqOf: ['tornado'],
          row: 4,
          col: 2,
        },
        volcano: {
          preReqs: ['fissure'],
          preReqOf: ['armageddon'],
          row: 5,
          col: 1,
        },
        tornado: {
          preReqs: ['twister'],
          preReqOf: ['hurricane'],
          row: 5,
          col: 2,
        },
        armageddon: {
          preReqs: ['volcano', 'hurricane'],
          row: 6,
          col: 1,
        },
        hurricane: {
          preReqs: ['tornado'],
          preReqOf: ['armageddon'],
          row: 6,
          col: 2,
        },
      },
    },
    {
      name: 'ss',
      skills: {
        werewolf: {
          preReqOf: ['lycanthropy'],
          row: 1,
          col: 1,
        },
        lycanthropy: {
          preReqs: ['werewolf'],
          row: 1,
          col: 2,
        },
        werebear: {
          preReqOf: ['maul'],
          row: 2,
          col: 3,
        },
        feralRage: {
          preReqs: ['werewolf'],
          preReqOf: ['rabies', 'fireClaws'],
          row: 3,
          col: 1,
        },
        maul: {
          preReqs: ['werebear'],
          preReqOf: ['fireClaws'],
          row: 3,
          col: 3,
        },
        rabies: {
          preReqs: ['feralRage'],
          preReqOf: ['fury'],
          row: 4,
          col: 1,
        },
        fireClaws: {
          preReqs: ['feralRage', 'maul'],
          preReqOf: ['hunger'],
          row: 4,
          col: 2,
        },
        hunger: {
          preReqs: ['fireClaws'],
          row: 5,
          col: 2,
        },
        shockWave: {
          preReqs: ['maul'],
          row: 5,
          col: 3,
        },
        fury: {
          preReqs: ['rabies'],
          row: 6,
          col: 1,
        },
      },
    },
    {
      name: 'dsummon',
      skills: {
        raven: {
          preReqOf: ['summonSpiritWolf'],
          row: 1,
          col: 2,
        },
        poisonCreeper: {
          preReqOf: ['carrionVine'],
          row: 1,
          col: 3,
        },
        oakSage: {
          preReqOf: ['heartOfWolverine', 'summonDireWolf'],
          row: 2,
          col: 1,
        },
        summonSpiritWolf: {
          preReqs: ['raven'],
          preReqOf: ['summonDireWolf'],
          row: 2,
          col: 2,
        },
        carrionVine: {
          preReqs: ['poisonCreeper'],
          preReqOf: ['solarCreeper'],
          row: 3,
          col: 3,
        },
        heartOfWolverine: {
          preReqs: ['oakSage'],
          preReqOf: ['spiritOfBarbs'],
          row: 4,
          col: 1,
        },
        summonDireWolf: {
          preReqs: ['oakSage', 'summonSpiritWolf'],
          preReqOf: ['summonGrizzly'],
          row: 4,
          col: 2,
        },
        solarCreeper: {
          preReqs: ['carrionVine'],
          row: 5,
          col: 3,
        },
        spiritOfBarbs: {
          preReqs: ['heartOfWolverine'],
          row: 6,
          col: 1,
        },
        summonGrizzly: {
          preReqs: ['summonDireWolf'],
          row: 6,
          col: 2,
        },
      },
    },
  ],
}
