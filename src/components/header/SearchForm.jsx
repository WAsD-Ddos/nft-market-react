// Компонент формы поиска
// Будет принимать пропсы: onSubmit, placeholder, hints
const SearchForm = (props) => {
    const {
        // onSubmit - обработчик отправки формы
        // placeholder - placeholder для input
        // hints - массив подсказок
        queryPlaceHolder,
        showQueryPlaceHolder,
        setQueryPlaceHolder,
        SetFilters,
    } = props;

    return (
        <form className="search" onSubmit={(e)=>{e.preventDefault()}}>
            <div className="search__field">
                <button type="submit" className="search__button">
                    <img
                        src="/header_input-search.png"
                        alt="Search"
                        className="search__icon"
                    />
                </button>
                <input
                    type="text"
                    className="search__input"
                    placeholder={queryPlaceHolder}
                    onBlur={showQueryPlaceHolder}
                    onFocus={() => setQueryPlaceHolder('')}
                    onInput={(e) => SetFilters(prev => ({
                        ...prev,
                        query: e.target.value
                    }))
                }
                />
            </div>

            <div className="search__hint hidenedHints">
                <ul className="search__hint-list">
                    <li className="search__hint-item">Dog</li>
                </ul>
            </div>
        </form>
    );
};

export default SearchForm;



