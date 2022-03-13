import {Todo} from '../../types'
import './style.css'

interface Props {
  children?: React.ReactNode
  todos: Todo[]
  clearCompleted: () => void
}

export function Footer({ children, todos, clearCompleted }: Props) {
  
  const itemsLeft = todos.filter(todo => !todo.complete).length
  
  return (
    <footer>
      <span> { itemsLeft} items left </span>

      {children}

      <button onClick={clearCompleted}>Clear Completed</button>

    </footer>
  )
}