import GoodsStatusRow from './GoodsStatusRow';
import GoodsCardsList from './GoodsCardsList';

const Goods = (props) => {
    const {
        // goodsItems,
        filters,
        title,
        SetFilters,
        currentFilter,
        onAddToCard,
        filteredItems,
    } = props;
    return (
        <section className="goods">
            <div className="goods__items">
                <GoodsStatusRow
                    title={title}
                    filters={filters}
                    SetFilters={SetFilters}
                    currentFilter={currentFilter}
                />

                <GoodsCardsList
                // items={goodsItems}
                onAddToCard = {onAddToCard}
                filteredItems = {filteredItems}
                currentFilter  ={currentFilter}
                />
            </div>
        </section>
    );
};

export default Goods;
