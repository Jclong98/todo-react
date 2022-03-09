import './style.css'

interface Props {
  id: number
  text: string
  complete: boolean
  onRemove: (id: number) => void
  onToggleComplete: (id: number) => void
}

export function Todo({
  id,
  text,
  onRemove,
  complete,
  onToggleComplete,
}: Props) {
  const classes = ['todo']

  if (complete) {
    classes.push('complete')
  }

  return (
    <label className={classes.join(' ')} key={id}>
      <p>
        <span className="handle">⠿</span>
        <input
          type="checkbox"
          name={`todo-${id}`}
          id={`todo-${id}`}
          checked={complete}
          onChange={() => onToggleComplete(id)}
        />
        <span className="todo__text">{text}</span>
      </p>
      <button onClick={() => onRemove(id)}>Delete</button>
    </label>
  )
}
