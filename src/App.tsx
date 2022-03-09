import { ReactSortable } from 'react-sortablejs'

import { Todo } from './components/Todo'
import { AddTodoForm } from './components/AddTodoForm'

import { useTodos } from './hooks/useTodos'

function App() {
  const { todos, setTodos, addTodo, removeTodo, toggleTodo } = useTodos()

  return (
    <div>
      <h1>React Todo App</h1>

      <AddTodoForm onSubmit={addTodo} />

      <ReactSortable list={todos} setList={setTodos} animation={200}>
        {todos.map(item => (
          <Todo
            key={item.id}
            {...item}
            onRemove={removeTodo}
            onToggleComplete={toggleTodo}
          />
        ))}
      </ReactSortable>
    </div>
  )
}

export default App
