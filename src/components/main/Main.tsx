import classNames from 'classnames'
import * as React from 'react'
import { classes } from '../../data/klass'
import Planner from '../planner/Planner'
import Switcher from '../switcher/Switcher'
import styles from './Main.module.scss'

interface IMainComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

interface IMainComponentState {
  currentClass: string
}

class Main extends React.Component<IMainComponentProps, IMainComponentState> {
  public state: IMainComponentState = {
    currentClass: 'sin',
  }

  public switchClass = (klass: string) => {
    this.setState({ currentClass: klass })
  }

  public render() {
    return (
      <div className={classNames([styles.Main])}>
        <Switcher
          classes={classes}
          currentClass={this.state.currentClass}
          switchClass={this.switchClass}
        />
        <Planner currentClass={this.state.currentClass} />
      </div>
    )
  }
}

export default Main
