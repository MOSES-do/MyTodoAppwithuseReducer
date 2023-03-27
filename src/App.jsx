import { useReducer, useCallback } from 'react'
import TodoItems from './components/TodoItems'
import AddItem from './components/AddItem'
import Search from './components/Search'

export const ACTIONS = {
  ADD_TODO: 'add_todo',
  INPUT_TODO: 'todo',//input field
  SEARCH_TODO: 'search', //search field
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
  RESET_INPUT: 'clear_input'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INPUT_TODO:
      return { ...state, item: action.payload }

    case ACTIONS.SEARCH_TODO:
      return { ...state, search: action.payload }

    case ACTIONS.ADD_TODO:
      return { ...state, todos: [...state.todos, newTodo(action.payload.item)] }


    case ACTIONS.TOGGLE_TODO:
      return {
        ...state, todos: [...state.todos.map(todo => (
          todo.id === (action.payload.id) ? {
            ...todo, completed: !todo.completed
          } :
            todo
        ))
        ]
      }

    case ACTIONS.RESET_INPUT:
      return { ...state, item: action.payload }

    case ACTIONS.DELETE_TODO:
      return {
        ...state, todos: [...state.todos.filter(todo => (
          todo.id !== (action.payload.id)
        ))
        ]
      }
  }
}

const newTodo = (item) => {
  return {
    id: Date.now(),
    item: item,
    completed: false
  }
}



function App() {

  const [state, dispatch] = useReducer(reducer, { todos: [], search: '', item: '' })
  console.log(state.todos, "updating items");


  return (
    <div className="app">
      <Search search={state.search} dispatch={dispatch} />
      <AddItem item={state.item} dispatch={dispatch} />

      {
        state.todos.length > 0 ?
          <TodoItems search={state.search} todos={state.todos} dispatch={dispatch} />
          :
          (<p>No todos created</p>)

      }
    </div>
  )

}

export default App
