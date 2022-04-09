import { Todo } from '../../types'

interface Props {
  children?: React.ReactNode
  todos: Todo[]
  clearCompleted: () => void
}

export function Footer({ children, todos, clearCompleted }: Props) {
  const itemsLeft = todos.filter((todo) => !todo.complete).length

  return (
    <footer className="todo-footer">
      <span> {itemsLeft} items left </span>

      {children}

      <button className="clear-btn" onClick={clearCompleted}>
        Clear Completed
      </button>
    </footer>
  )
}
