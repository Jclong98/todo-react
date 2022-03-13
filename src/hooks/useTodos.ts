import { useLocalStorage } from 'usehooks-ts'

interface Todo {
  id: number
  text: string
  complete: boolean
}

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [
    { id: 3, text: 'Make a Todo Application', complete: false },
    { id: 2, text: 'Get Coffee', complete: false },
    { id: 1, text: 'Wake Up', complete: false },
  ])

  const removeTodo = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.complete = !item.complete
        }
        return item
      })
    )
  }

  const addTodo = (text: string) => {
    const newTodo = {
      id: new Date().getTime(),
      text,
      complete: false,
    }
    setTodos([newTodo, ...todos])
  }

  const clearCompleted = () => {
    setTodos(todos.filter((item) => !item.complete))
  }

  return {
    todos,
    removeTodo,
    toggleTodo,
    addTodo,
    setTodos,
    clearCompleted,
  }
}
