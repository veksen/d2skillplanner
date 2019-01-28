import classNames from 'classnames'
import * as React from 'react'
import Skill from '../skill/Skill'
import styles from './Klass.module.scss'

interface IKlassComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  trees: any[]
  levels: any
  increment: (skill: string) => void
  decrement: (skill: string) => void
}

const Klass: React.FunctionComponent<IKlassComponentProps> = ({
  className,
  trees,
  levels,
  increment,
  decrement,
  ...props
}) => (
  <div className={classNames([styles.Klass, className, 'tree'])} {...props}>
    {trees.map(tree => {
      return (
        <div key={tree.name} id={tree.name} className="tab">
          {Object.keys(tree.skills).map(skill => {
            const { row, col } = tree.skills[skill]
            const level = levels[skill] || 0
            return (
              <Skill
                key={skill}
                name={skill}
                row={row}
                col={col}
                level={level}
                /* tslint:disable-next-line jsx-no-lambda */
                onClick={() => increment(skill)}
                /* tslint:disable-next-line jsx-no-lambda */
                onContextMenu={e => {
                  e.preventDefault()
                  decrement(skill)
                }}
              />
            )
          })}
        </div>
      )
    })}
  </div>
)

export default Klass
