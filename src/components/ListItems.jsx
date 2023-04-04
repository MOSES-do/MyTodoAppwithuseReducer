import { ACTIONS } from '../ThemeContext'

const ListItems = ({ todo, dispatch }) => {
    // console.log(todo);
    return (
        <>
            <li style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <input type="checkbox" name="id" value={todo.completed} onChange={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} />

                <label htmlFor="id" style={(todo.completed) ? { textDecoration: "line-through" } : null}
                    onDoubleClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
                >
                    {todo.item}
                </label>

                <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
            </li>
        </>
    )
}

export default ListItems;