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
    <form className="add-todo-form card" onSubmit={handleSubmit}>
      <div className="placeholder-check"></div>
      <input
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Create a new todo..."
        type="text"
      />
    </form>
  )
}
