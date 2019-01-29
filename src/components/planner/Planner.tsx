import classNames from 'classnames'
import * as React from 'react'
import { ISkill, ITree } from '../../data/klass'
import { sin } from '../../data/sin'
import Klass from '../klass/Klass'
import styles from './Planner.module.scss'

export interface IConfig {
  charLevel: number
  skillBaseMax: number
  skillBaseMin: number
  skillQuests: number
}

export interface ILevels {
  [name: string]: number
}

interface IPlannerComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

interface IPlannerComponentState {
  levels: ILevels
  config: IConfig
}

export const findSkill = (skill: string, trees: ITree[]) => {
  const tree = trees.find(t => t.skills.hasOwnProperty(skill))
  return tree!.skills[skill]
}

class Planner extends React.Component<
  IPlannerComponentProps,
  IPlannerComponentState
> {
  public state: IPlannerComponentState = {
    config: {
      charLevel: 99,
      skillBaseMax: 20,
      skillBaseMin: 0,
      skillQuests: 12,
    },
    levels: {},
  }

  public canIncrement = (skill: string): boolean => {
    const minLevel = this.state.config.skillBaseMin
    const maxLevel = this.state.config.skillBaseMax
    const skillLevel = this.state.levels[skill] || minLevel
    if (skillLevel === maxLevel) {
      return false
    }

    const skillData = findSkill(skill, sin.trees)
    const { preReqs } = skillData

    if (!preReqs) {
      return true
    }

    return preReqs.every(preReq => {
      const matchedPreReq = this.state.levels[preReq]
      return !!matchedPreReq && matchedPreReq > 0
    })
  }

  public canDecrement = (skill: string): boolean => {
    const minLevel = this.state.config.skillBaseMin
    const skillLevel = this.state.levels[skill] || minLevel
    if (skillLevel === minLevel) {
      return false
    }

    const skillData = findSkill(skill, sin.trees)
    const { preReqOf } = skillData

    if (!preReqOf) {
      return true
    }

    const preReqsHavePoints = preReqOf.every(preReq => {
      const matchedPreReq = this.state.levels[preReq]
      return !matchedPreReq || matchedPreReq < minLevel
    })

    return preReqsHavePoints || skillLevel > minLevel + 1
  }

  public increment = (skill: string) => {
    if (!this.canIncrement(skill)) {
      return
    }

    this.setState(prevState => {
      const newLevel = prevState.levels[skill] ? prevState.levels[skill] + 1 : 1

      return {
        ...prevState,
        levels: { ...prevState.levels, [skill]: newLevel },
      }
    })
  }

  public decrement = (skill: string) => {
    if (!this.canDecrement(skill)) {
      return
    }

    this.setState(prevState => {
      const newLevel = prevState.levels[skill] ? prevState.levels[skill] - 1 : 0

      return {
        ...prevState,
        levels: { ...prevState.levels, [skill]: newLevel },
      }
    })
  }

  public render() {
    const { children, className, ...props } = this.props
    return (
      <div
        className={classNames([styles.Planner, className, 'trees-wrapper'])}
        {...props}
      >
        planner
        <Klass
          config={this.state.config}
          levels={this.state.levels}
          trees={sin.trees}
          increment={this.increment}
          decrement={this.decrement}
        />
        {children}
      </div>
    )
  }
}

export default Planner
