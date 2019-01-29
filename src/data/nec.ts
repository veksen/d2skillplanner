import { IKlass } from './klass'

// tslint:disable object-literal-sort-keys
export const nec: IKlass = {
  short: 'nec',
  long: 'Necromancer',
  remainingSkills: 0,
  trees: [
    {
      name: 'nsummon',
      skills: {
        skeletonMastery: {
          preReqs: ['raiseSkeleton'],
          row: 1,
          col: 1,
        },
        raiseSkeleton: {
          preReqOf: ['skeletonMastery', 'skeletalMage'],
          row: 1,
          col: 3,
        },
        clayGolem: {
          preReqOf: ['golemMastery', 'bloodGolem'],
          row: 2,
          col: 2,
        },
        golemMastery: {
          preReqs: ['clayGolem'],
          preReqOf: ['summonResist'],
          row: 3,
          col: 1,
        },
        skeletalMage: {
          preReqs: ['raiseSkeleton'],
          preReqOf: ['revive'],
          row: 3,
          col: 3,
        },
        bloodGolem: {
          preReqs: ['clayGolem'],
          preReqOf: ['ironGolem'],
          row: 4,
          col: 2,
        },
        summonResist: {
          preReqs: ['golemMastery'],
          row: 5,
          col: 1,
        },
        ironGolem: {
          preReqs: ['bloodGolem'],
          preReqOf: ['fireGolem', 'revive'],
          row: 5,
          col: 2,
        },
        fireGolem: {
          preReqs: ['ironGolem'],
          row: 6,
          col: 2,
        },
        revive: {
          preReqs: ['ironGolem', 'skeletalMage'],
          row: 6,
          col: 3,
        },
      },
    },
    {
      name: 'bnp',
      skills: {
        teeth: {
          preReqOf: ['corpseExplosion'],
          row: 1,
          col: 2,
        },
        boneArmor: {
          preReqs: ['boneWall'],
          row: 1,
          col: 3,
        },
        poisonDagger: {
          preReqOf: ['poisonExplosion'],
          row: 2,
          col: 1,
        },
        corpseExplosion: {
          preReqs: ['teeth'],
          preReqOf: ['poisonExplosion', 'boneSpear'],
          row: 2,
          col: 2,
        },
        boneWall: {
          preReqs: ['boneArmor'],
          preReqOf: ['bonePrison'],
          row: 3,
          col: 3,
        },
        poisonExplosion: {
          preReqs: ['poisonDagger', 'corpseExplosion'],
          preReqOf: ['poisonNova'],
          row: 4,
          col: 1,
        },
        boneSpear: {
          preReqs: ['corpseExplosion'],
          preReqOf: ['boneSpirit'],
          row: 4,
          col: 2,
        },
        bonePrison: {
          preReqs: ['boneSpear', 'boneWall'],
          row: 5,
          col: 3,
        },
        poisonNova: {
          preReqs: ['poisonExplosion'],
          row: 6,
          col: 1,
        },
        boneSpirit: {
          preReqs: ['boneSpear'],
          row: 6,
          col: 2,
        },
      },
    },
    {
      name: 'curses',
      skills: {
        amplifyDamage: {
          preReqOf: ['ironMaiden', 'weaken'],
          row: 1,
          col: 2,
        },
        dimVision: {
          preReqOf: ['confuse'],
          row: 2,
          col: 1,
        },
        weaken: {
          preReqs: ['amplifyDamage'],
          preReqOf: ['terror'],
          row: 2,
          col: 3,
        },
        ironMaiden: {
          preReqs: ['amplifyDamage'],
          preReqOf: ['lifeTap'],
          row: 3,
          col: 2,
        },
        terror: {
          preReqs: ['weaken'],
          preReqOf: ['decrepify'],
          row: 3,
          col: 3,
        },
        confuse: {
          preReqs: ['dimVision'],
          preReqOf: ['attract'],
          row: 4,
          col: 1,
        },
        lifeTap: {
          preReqs: ['ironMaiden'],
          preReqOf: ['lowerResist'],
          row: 4,
          col: 2,
        },
        attract: {
          preReqs: ['confuse'],
          row: 5,
          col: 1,
        },
        decrepify: {
          preReqs: ['terror'],
          preReqOf: ['lowerResist'],
          row: 5,
          col: 3,
        },
        lowerResist: {
          preReqs: ['lifeTap', 'decrepify'],
          row: 6,
          col: 2,
        },
      },
    },
  ],
}
