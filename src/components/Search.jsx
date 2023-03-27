import { ACTIONS } from '../App'


const Search = ({ search, dispatch }) => (
    <>
        <label htmlFor="search">Search:</label>
        <input type="text" name="search" placeholder="...search"
            value={search}
            onChange={(e) => dispatch({ type: ACTIONS.SEARCH_TODO, payload: e.target.value })}
        />
    </>
)


export default Search;