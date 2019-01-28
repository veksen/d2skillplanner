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

const Planner: React.FunctionComponent<IPlannerComponentProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={classNames([styles.Planner, className])} {...props}>
    planner
    <Klass trees={sin.trees} />
    {children}
  </div>
)

export default Planner
