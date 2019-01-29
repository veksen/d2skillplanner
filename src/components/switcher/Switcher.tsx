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
  switchClass: (klass: string) => void
  currentClass: any
}

const Switcher: React.FunctionComponent<ISwitcherComponentProps> = ({
  className,
  classes,
  switchClass,
  currentClass,
  ...props
}) => (
  <div
    className={classNames([styles.Skill, className, 'class-switcher'])}
    {...props}
  >
    <ul>
      {Object.keys(classes).map(c => {
        const { short, long } = classes[c]
        const isActive = short === currentClass
        return (
          <li
            key={short}
            className={classNames({ active: isActive })}
            /* tslint:disable-next-line jsx-no-lambda */
            onClick={() => switchClass(short)}
          >
            {long}
          </li>
        )
      })}
    </ul>
  </div>
)

export default Switcher
