function SearchHeader({search}) {

const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger;
    search("nursah");
}

    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit} className="seacrhFrom">
                <label>Ne Arıyorsunuz?</label>
                <input type="text"/>
            </form>
        </div>
    )
}

export default SearchHeader;