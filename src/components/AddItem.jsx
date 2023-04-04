import { ACTIONS } from '../ThemeContext'
import { useStateObj, updateDispatch } from '../ThemeContext'

const AddItem = () => {

    const { item } = useStateObj();
    const dispatch = updateDispatch();


    const handleSubmit = () => {
        if (!item) return;
        //currently we don't have access to the name state, so we use a payload to get access in the reducer
        dispatch({ type: ACTIONS.ADD_TODO, payload: { item: item } })
    }


    return (
        <form onSubmit={(e) => handleSubmit(e.preventDefault())}>
            <label htmlFor="addItem">Add Item</label>
            <input type="text" name="addItem" value={item}
                onChange={(e) => dispatch({ type: ACTIONS.INPUT_TODO, payload: e.target.value })}
            /> {' '}
            <button onClick={handleSubmit}>submit</button>
        </form>

    )
}

export default AddItem;