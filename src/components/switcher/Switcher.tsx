import classNames from 'classnames'
import * as React from 'react'
import { IKlass } from '../../data/klass'
import styles from './Switcher.module.scss'

interface ISwitcherComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  classes: IKlass[]
  currentClass: any
}

const Switcher: React.FunctionComponent<ISwitcherComponentProps> = ({
  className,
  classes,
  currentClass,
  ...props
}) => (
  <div
    id={name}
    className={classNames([styles.Skill, className, 'class-switcher'])}
    {...props}
  >
    <ul>
      {classes.map(({ short, long }) => {
        const isActive = short === currentClass
        return (
          <li key={short} className={classNames({ active: isActive })}>
            {long}
          </li>
        )
      })}
    </ul>
  </div>
)

export default Switcher
