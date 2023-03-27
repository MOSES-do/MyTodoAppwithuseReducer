import { ACTIONS } from '../App'


const AddItem = ({ item, dispatch }) => {

    const handleSubmit = () => {
        if (!item) return;
        //currently we don't have access to the name state, so we use a payload to get access in the reducer
        dispatch({ type: ACTIONS.ADD_TODO, payload: { item: item } })

        dispatch({ type: ACTIONS.RESET_INPUT, payload: "" })

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