import classNames from 'classnames'
import * as React from 'react'
import { ITree } from '../../data/klass'
import { sin } from '../../data/sin'
import Klass from '../klass/Klass'
import styles from './Planner.module.scss'

interface IPlannerComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

interface IPlannerComponentState {
  skills: {
    [name: string]: number
  }
  config: {
    charLevel: number
    skillBaseMax: number
    skillBaseMin: number
    skillQuests: number
  }
}

const findSkill = (skill: string, trees: ITree[]) => {
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
    skills: {},
  }

  public canIncrement = (skill: string): boolean => {
    const minLevel = this.state.config.skillBaseMin
    const maxLevel = this.state.config.skillBaseMax
    const skillLevel = this.state.skills[skill] || minLevel
    if (skillLevel === maxLevel) {
      return false
    }

    const skillData = findSkill(skill, sin.trees)
    const { preReqs } = skillData

    if (!preReqs) {
      return true
    }

    return preReqs.every(preReq => {
      const matchedPreReq = this.state.skills[preReq]
      return !!matchedPreReq && matchedPreReq > 0
    })
  }

  public canDecrement = (skill: string): boolean => {
    const minLevel = this.state.config.skillBaseMin
    const skillLevel = this.state.skills[skill] || minLevel
    if (skillLevel === minLevel) {
      return false
    }

    const skillData = findSkill(skill, sin.trees)
    const { preReqOf } = skillData

    if (!preReqOf) {
      return true
    }

    const preReqsHavePoints = preReqOf.every(preReq => {
      const matchedPreReq = this.state.skills[preReq]
      return !matchedPreReq || matchedPreReq < minLevel
    })

    return preReqsHavePoints || skillLevel > minLevel + 1
  }

  public increment = (skill: string) => {
    if (!this.canIncrement(skill)) {
      return
    }

    this.setState(prevState => {
      const newLevel = prevState.skills[skill] ? prevState.skills[skill] + 1 : 1

      return {
        ...prevState,
        skills: { ...prevState.skills, [skill]: newLevel },
      }
    })
  }

  public decrement = (skill: string) => {
    if (!this.canDecrement(skill)) {
      return
    }

    this.setState(prevState => {
      const newLevel = prevState.skills[skill] ? prevState.skills[skill] - 1 : 0

      return {
        ...prevState,
        skills: { ...prevState.skills, [skill]: newLevel },
      }
    })
  }

  public render() {
    const { children, className, ...props } = this.props
    return (
      <div className={classNames([styles.Planner, className])} {...props}>
        planner
        <Klass
          trees={sin.trees}
          increment={this.increment}
          decrement={this.decrement}
          levels={this.state.skills}
        />
        {children}
      </div>
    )
  }
}

export default Planner
