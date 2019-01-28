import classNames from 'classnames'
import * as React from 'react'
import styles from './Klass.module.scss'

interface IKlassComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  trees: any[]
}

const Klass: React.FunctionComponent<IKlassComponentProps> = ({
  className,
  trees,
  ...props
}) => (
  <div className={classNames([styles.Klass, className, 'tree'])} {...props}>
    {trees.map(tree => {
      return (
        <div key={tree.name} id={tree.name} className="tab">
          {Object.keys(tree.skills).map(skill => {
            const { row, col, base } = tree.skills[skill]
            return (
              <div key={skill} id={skill} className={`r${row} c${col}`}>
                <span className="lvl">{base}</span>
              </div>
            )
          })}
        </div>
      )
    })}
  </div>
)

export default Klass
