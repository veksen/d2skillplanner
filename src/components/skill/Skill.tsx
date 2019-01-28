import classNames from 'classnames'
import * as React from 'react'
import styles from './Skill.module.scss'

interface ISkillComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: string
  row: number
  col: number
  level: number
}

const Skill: React.FunctionComponent<ISkillComponentProps> = ({
  className,
  name,
  row,
  col,
  level,
  ...props
}) => (
  <div
    id={name}
    className={classNames([styles.Skill, className, `r${row} c${col}`])}
    {...props}
  >
    <span className="lvl">{level}</span>
  </div>
)

export default Skill
