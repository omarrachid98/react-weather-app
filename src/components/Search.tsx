import React from "react";

type Props = {
    search: string,
    onSearchSubmit: React.FormEventHandler<HTMLFormElement>
    onChangeSearch: React.ChangeEventHandler<HTMLInputElement>
}

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