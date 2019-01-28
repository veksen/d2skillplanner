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
}

class Planner extends React.Component<
  IPlannerComponentProps,
  IPlannerComponentState
> {
  public state: IPlannerComponentState = {
    skills: {},
  }

  public increment = (skill: string) => {
    this.setState(prevState => {
      const level = prevState.skills[skill] ? prevState.skills[skill] + 1 : 1
      return {
        skills: { ...this.state.skills, [skill]: level },
      }
    })
  }

  public decrement = (skill: string) => {
    this.setState(prevState => {
      const level = prevState.skills[skill] ? prevState.skills[skill] - 1 : 0
      return {
        skills: { ...this.state.skills, [skill]: level },
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
