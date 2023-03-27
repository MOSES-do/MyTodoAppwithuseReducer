import React from 'react'

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange,
    onInStockOnlyChange }) => {
    return (
        <form style={{ display: "flex", flexDirection: "column" }} >
            <input style={{ alignSelf: "flex-start" }} type="text" placeholder="Search..."
                value={filterText} onChange={(e) => onFilterTextChange(e.target.value)}
            />

            <div>
                <input type="checkbox" id="box" checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                /> {' '}
                <label htmlFor="box">Only show products in stock</label>
            </div>
        </form>
    )
}

export default SearchBar