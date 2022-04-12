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
    <div className="container">
      <Header />

      <main>
        <AddTodoForm onSubmit={addTodo} />

        <div className="todo-group card">
          <ReactSortable
            list={todos}
            setList={setTodos}
            animation={200}
            delay={100}
            delayOnTouchOnly={true}
          >
            {todos.map(item => (
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
      </main>

      <footer className="explaination-footer">
        <p>Drag and drop to reorder List</p>

        <p>
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="https://github.com/jclong98/todo-react">Jacob Long</a>.
        </p>
      </footer>
    </div>
  )
}

export default App
