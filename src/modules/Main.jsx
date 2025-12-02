import Goods from '../components/goods/Goods';
import Header from '../components/header/Header';


const Main = (props) => {



    const {
        filters,
        title,
        SidebarHanndleClose,
        SearchInputRef,
        queryPlaceHolder,
        showQueryPlaceHolder,
        setQueryPlaceHolder,
        SetFilters,
        currentFilter,

        OnSetBasketActive,

        onAddToCard,

        filteredItems,
    } = props


    return (
        <section className="main">
            <div className="container">
                <Header
                    SidebarHanndleClose={SidebarHanndleClose}
                    SearchInputRef={SearchInputRef}

                    queryPlaceHolder={queryPlaceHolder}
                    showQueryPlaceHolder={showQueryPlaceHolder}
                    setQueryPlaceHolder ={setQueryPlaceHolder}

                    SetFilters = {SetFilters}

                   OnSetBasketActive ={OnSetBasketActive}
                />
                <Goods
                    currentFilter={currentFilter}
                    filters={filters}
                    SetFilters={SetFilters}
                    title={title}
                    onAddToCard ={onAddToCard}
                    filteredItems ={filteredItems}
                />

            </div>
        </section>
    )
}
export default Main
