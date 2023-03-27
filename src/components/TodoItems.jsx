import ListItems from './ListItems'


const TodoItems = ({ todos, dispatch, search }) => {

    const todo = todos.filter(todo => (
        (todo.item).toLowerCase()).includes(search.toLowerCase()))

    return (

        todo.map(todoItem => (
            <ul style={{ listStyle: 'none' }}>
                <ListItems todo={todoItem} key={todoItem.id} dispatch={dispatch} />
            </ul>
        ))

    )





}


export default TodoItems;

