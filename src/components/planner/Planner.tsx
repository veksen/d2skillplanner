import classNames from 'classnames'
import * as React from 'react'
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

  public increment = (skill: string) => {
    this.setState(prevState => {
      const newLevel = prevState.skills[skill] ? prevState.skills[skill] + 1 : 1

      if (newLevel > prevState.config.skillBaseMax) {
        return prevState
      }

      return {
        ...prevState,
        skills: { ...prevState.skills, [skill]: newLevel },
      }
    })
  }

  public decrement = (skill: string) => {
    this.setState(prevState => {
      const newLevel = prevState.skills[skill] ? prevState.skills[skill] - 1 : 0

      if (newLevel < prevState.config.skillBaseMin) {
        return prevState
      }

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
