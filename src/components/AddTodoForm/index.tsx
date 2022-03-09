import './style.css'

import { useState } from 'react'

interface Props {
  onSubmit: (text: string) => void
}

export function AddTodoForm({ onSubmit }: Props) {
  const [newTodoText, setNewTodoText] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(newTodoText)
    setNewTodoText('')
  }

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
        placeholder="Add a todo"
        name="newTodo"
      />

      <button>Add</button>
    </form>
  )
}
