interface ISkill {
  [name: string]: {
    preReqOf?: string[]
    preReqs?: string[]
    row: number
    col: number
  }
}

interface ITree {
  name: string
  skills: ISkill
}

export interface IKlass {
  short: string
  long: string
  remainingSkills: number
  trees: ITree[]
}
