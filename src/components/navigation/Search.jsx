const Search = () => {
    return (
        <form onSubmit={''} >
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={''}
                onChange={''}
            />
        </form>
    )
};

export default Search;