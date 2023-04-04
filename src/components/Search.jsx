import { ACTIONS } from '../ThemeContext'
import { useStateObj, updateDispatch } from '../ThemeContext'

const Search = () => {
    const { search } = useStateObj();
    const dispatch = updateDispatch();

    function clear_search(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.RESET_SEARCH, payload: "" })
    }

    return (
        <form onSubmit={clear_search}>
            <label htmlFor="search">Search:</label>
            <input type="text" name="search" placeholder="...search"
                value={search}
                onChange={(e) => dispatch({ type: ACTIONS.SEARCH_TODO, payload: e.target.value })}
            />
        </form>
    )
}

export default Search;