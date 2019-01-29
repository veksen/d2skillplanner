import { bar } from './bar'
import { dru } from './dru'
import { nec } from './nec'
import { pal } from './pal'
import { sin } from './sin'
import { sor } from './sor'
import { zon } from './zon'

export interface ISkillData {
  preReqOf?: string[]
  preReqs?: string[]
  row: number
  col: number
}

export interface ISkill {
  [name: string]: ISkillData
}

export interface ITree {
  name: string
  skills: ISkill
}

export interface IKlass {
  short: string
  long: string
  remainingSkills: number
  trees: ITree[]
}

export const classes: IKlass[] = [bar, dru, nec, pal, sin, sor, zon]
