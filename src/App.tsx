import { useLocalStorage } from 'usehooks-ts'
import { ReactSortable } from 'react-sortablejs'

import { Header } from './components/Header'
import { AddTodoForm } from './components/AddTodoForm'
import { Todo } from './components/Todo'
import { Footer } from './components/Footer'
import { FilterRadio } from './components/FilterRadio'

import { useTodos } from './hooks/useTodos'

import { FilterType, Todo as TodoType } from './types'

function App() {
  const { todos, setTodos, addTodo, removeTodo, toggleTodo, clearCompleted } =
    useTodos()

  const [filter, setFilter] = useLocalStorage<FilterType>('filter', 'all')

  const isVisible = (todo: TodoType) => {
    switch (filter) {
      case 'all':
        return true
      case 'active':
        return !todo.complete
      case 'completed':
        return todo.complete
      default:
        return false
    }
  }

  return (
    <div>
      <Header />

      <AddTodoForm onSubmit={addTodo} />

      <ReactSortable list={todos} setList={setTodos} animation={200}>
        {todos.map((item) => (
          <Todo
            style={isVisible(item) ? {} : { display: 'none' }}
            key={item.id}
            {...item}
            onRemove={removeTodo}
            onToggleComplete={toggleTodo}
          />
        ))}
      </ReactSortable>

      <Footer clearCompleted={clearCompleted} todos={todos}>
        <FilterRadio filter={filter} onChange={setFilter} />
      </Footer>
    </div>
  )
}

export default App
