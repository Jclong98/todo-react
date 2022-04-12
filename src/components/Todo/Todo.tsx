import { Check } from '../Check'

interface Props {
  id: number
  text: string
  complete: boolean
  onRemove: (id: number) => void
  onToggleComplete: (id: number) => void
  style?: React.CSSProperties
}

export function Todo({
  id,
  text,
  onRemove,
  complete,
  onToggleComplete,
  style,
}: Props) {
  const classes = ['todo']

  if (complete) {
    classes.push('complete')
  }

  return (
    <div className={classes.join(' ')} key={id} style={style}>
      {/* <input
        type="checkbox"
        name={`todo-${id}`}
        id={`todo-${id}`}
        checked={complete}
        onChange={() => onToggleComplete(id)}
      /> */}
      <Check checked={complete} onChange={() => onToggleComplete(id)} />
      <span className="todo__text">{text}</span>
      <button
        title="Remove"
        className="remove-btn"
        onClick={() => onRemove(id)}
      >
        <img src="/images/icon-cross.svg" alt="remove button" />
      </button>
    </div>
  )
}
