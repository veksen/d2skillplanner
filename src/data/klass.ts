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
