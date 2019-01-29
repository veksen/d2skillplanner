import classNames from 'classnames'
import * as React from 'react'
import { ISkillData, ITree } from '../../data/klass'
import { findSkill, IConfig, ILevels } from '../planner/Planner'
import styles from './Details.module.scss'

interface IDetailsComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  config: IConfig
  levels: ILevels
  trees: ITree[]
}

const LEVEL_PER_SKILL_ROW: { [row: number]: number } = {
  1: 0,
  2: 6,
  3: 12,
  4: 18,
  5: 24,
  6: 30,
}

class Details extends React.Component<IDetailsComponentProps> {
  public resetSkills = () => {
    console.log('implement me!')
  }

  public calcTotal = () => {
    return Object.keys(this.props.levels).reduce((acc, curr) => {
      return (acc += this.props.levels[curr])
    }, 0)
  }

  public calcRemaining = () => {
    const { charLevel, skillQuests } = this.props.config
    return charLevel + skillQuests - 1 - this.calcTotal()
  }

  public calcRequired = () => {
    const skills: ISkillData[] = []
    for (const level in this.props.levels) {
      if (!this.props.levels.hasOwnProperty(level)) {
        continue
      }

      if (this.props.levels[level] === 0) {
        continue
      }

      const skill = findSkill(level, this.props.trees)

      if (skill) {
        skills.push(skill)
      }
    }

    const highestLevel = () => {
      const skillLevels = skills.map(({ row }) => {
        return LEVEL_PER_SKILL_ROW[row]
      })
      return Math.max(...skillLevels)
    }

    return Math.max(this.calcTotal(), highestLevel())
  }

  public render() {
    const { children, className, ...props } = this.props
    return (
      <div
        className={classNames([styles.Details, className, 'tabs-detail'])}
        {...props}
      >
        <div className="counter-wrapper">
          <div className="remaining-skills">
            <span className="rem">{this.calcRemaining()}</span> Skills Remaining
          </div>
          <div className="required-level">
            <span className="lvl">{this.calcRequired()}</span> Required Level
          </div>
        </div>
        <div className="reset-wrapper">
          <div className="btn reset" onClick={this.resetSkills}>
            Reset Skills
          </div>
        </div>
      </div>
    )
  }
}

export default Details
