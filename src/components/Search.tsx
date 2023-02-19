import React from "react";
import { SearchProps } from "../types/types";

const Search = ({search, onChangeSearch, onSearchSubmit} : Props) => {
    return (
        <form onSubmit={onSearchSubmit} className='w-full'>
            <input 
                className="outline-none rounded-full p-4 w-full"
                type="text" 
                name="search" 
                id="search" 
                onChange={onChangeSearch}
                value={search}
                placeholder="Cerca località"
            />
        </form>
    )
}

export default Search;