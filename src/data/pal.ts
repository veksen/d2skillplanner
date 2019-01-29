import { IKlass } from './klass'

// tslint:disable object-literal-sort-keys
export const pal: IKlass = {
  short: 'pal',
  long: 'Paladin',
  remainingSkills: 0,
  trees: [
    {
      name: 'defensive',
      skills: {
        prayer: {
          preReqOf: ['cleansing'],
          row: 1,
          col: 1,
        },
        resistFire: {
          row: 1,
          col: 3,
        },
        defiance: {
          preReqOf: ['vigor'],
          row: 2,
          col: 2,
        },
        resistCold: {
          row: 2,
          col: 3,
        },
        cleansing: {
          preReqs: ['prayer'],
          preReqOf: ['vigor', 'meditation'],
          row: 3,
          col: 1,
        },
        resistLightning: {
          row: 3,
          col: 3,
        },
        vigor: {
          preReqs: ['cleansing', 'defiance'],
          preReqOf: ['redemption'],
          row: 4,
          col: 2,
        },
        meditation: {
          preReqs: ['cleansing'],
          row: 5,
          col: 1,
        },
        redemption: {
          preReqs: ['vigor'],
          row: 6,
          col: 2,
        },
        salvation: {
          row: 6,
          col: 3,
        },
      },
    },
    {
      name: 'offensive',
      skills: {
        might: {
          preReqOf: ['holyFire'],
          row: 1,
          col: 1,
        },
        holyFire: {
          preReqs: ['might'],
          preReqOf: ['holyFreeze'],
          row: 2,
          col: 2,
        },
        thorns: {
          preReqOf: ['sanctuary'],
          row: 2,
          col: 3,
        },
        blessedAim: {
          preReqs: ['might'],
          preReqOf: ['concentration'],
          row: 3,
          col: 1,
        },
        concentration: {
          preReqs: ['blessedAim'],
          preReqOf: ['fanaticism'],
          row: 4,
          col: 1,
        },
        holyFreeze: {
          preReqs: ['holyFire'],
          preReqOf: ['holyShock', 'sanctuary'],
          row: 4,
          col: 2,
        },
        holyShock: {
          preReqs: ['holyFreeze'],
          row: 5,
          col: 2,
        },
        sanctuary: {
          preReqs: ['holyFreeze', 'thorns'],
          preReqOf: ['conviction'],
          row: 5,
          col: 3,
        },
        fanaticism: {
          preReqs: ['conviction'],
          row: 6,
          col: 1,
        },
        conviction: {
          preReqs: ['sanctuary'],
          row: 6,
          col: 3,
        },
      },
    },
    {
      name: 'pcombat',
      skills: {
        sacrifice: {
          preReqOf: ['zeal'],
          row: 1,
          col: 1,
        },
        smite: {
          preReqOf: ['charge'],
          row: 1,
          col: 3,
        },
        holyBolt: {
          preReqOf: ['blessedHammer'],
          row: 2,
          col: 2,
        },
        zeal: {
          preReqs: ['sacrifice'],
          preReqOf: ['vengeance'],
          row: 3,
          col: 1,
        },
        charge: {
          preReqs: ['smite'],
          preReqOf: ['holyShield'],
          row: 3,
          col: 3,
        },
        blessedHammer: {
          preReqs: ['holyBolt'],
          preReqOf: ['holyShield', 'fistOfTheHeavens'],
          row: 4,
          col: 2,
        },
        vengeance: {
          preReqs: ['zeal'],
          preReqOf: ['conversion'],
          row: 4,
          col: 1,
        },
        conversion: {
          preReqs: ['vengeance'],
          preReqOf: ['fistOfTheHeavens'],
          row: 5,
          col: 1,
        },
        holyShield: {
          preReqs: ['blessedHammer', 'charge'],
          row: 5,
          col: 3,
        },
        fistOfTheHeavens: {
          preReqs: ['conversion', 'blessedHammer'],
          row: 6,
          col: 2,
        },
      },
    },
  ],
}
