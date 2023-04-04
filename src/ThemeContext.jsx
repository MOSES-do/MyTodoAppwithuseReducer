import React, { useContext, useReducer, useMemo } from 'react'

export const ACTIONS = {
    ADD_TODO: 'add_todo',
    INPUT_TODO: 'todo',//input field
    SEARCH_TODO: 'search', //search field
    TOGGLE_TODO: 'toggle_todo',
    DELETE_TODO: 'delete_todo',
    // RESET_INPUT: 'clear_input',
    RESET_SEARCH: 'clear_search'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INPUT_TODO:
            return { ...state, item: action.payload }

        case ACTIONS.SEARCH_TODO:
            return { ...state, search: action.payload }

        case ACTIONS.ADD_TODO:
            return { ...state, todos: [...state.todos, newTodo(action.payload.item)], item: "" }


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


        case ACTIONS.RESET_SEARCH:
            return { ...state, search: action.payload }


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

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useStateObj() {
    return useContext(ThemeContext);
}

export function updateDispatch() {
    return useContext(ThemeUpdateContext);
}


export function ThemeProvider({ children }) {
    const providerValue = useMemo(() => ({ todos: [], search: '', item: '' }))
    const [state, dispatch] = useReducer(reducer, providerValue);

    console.log(state.todos)
    return (
        <ThemeContext.Provider value={state}>
            <ThemeUpdateContext.Provider value={dispatch}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}