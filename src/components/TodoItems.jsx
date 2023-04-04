
import { useState, useEffect } from 'react'
import ListItems from './ListItems'
import { useStateObj, updateDispatch } from '../ThemeContext'




const TodoItems = () => {
    const [searchResult, setSearchResult] = useState();
    const { todos, search } = useStateObj();
    const dispatch = updateDispatch();

    //So i've decided not to include the useEffect for my search but i'm still trying to ascertain if it is really necessary to do so.

    useEffect(() => {
        const todo = todos.filter(todo => (
            (todo.item).toLowerCase()).includes(search.toLowerCase())).reverse();

        setSearchResult(todo)
    }, [todos, search])

    console.log(searchResult);



    return (
        <>
            {
                todos.length > 0 && searchResult ? (
                    searchResult.map(todoItem => (
                        <ul style={{ listStyle: 'none' }}>
                            <ListItems todo={todoItem} key={todoItem.id} dispatch={dispatch} />
                        </ul>
                    ))
                )
                    :
                    (<p>No todos created</p>)
            }
        </>


    )





}


export default TodoItems;

