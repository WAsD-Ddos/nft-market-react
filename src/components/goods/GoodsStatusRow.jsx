// Компонент строки статуса товаров (заголовок + кнопки фильтров)
// Будет принимать пропсы: title, filters
import FilterButton from './FilterButton';

const GoodsStatusRow = (props) => {
    const {
        title,
        filters,
        SetFilters,
        currentFilter,
    } = props;

    return (
        <div className="goods__statusrow">
            <div className="goods__title">{title}</div>
            <div className="goods__button-group">
                {filters && filters.map((item, index) => (
                    <FilterButton
                        key={item.label + index}
                        value={item.value}
                        label={item.label}
                        isActive={currentFilter.filter === item.value}
                        onClick={() => SetFilters(prev => ({ ...prev, filter: item.value }))}
                    />
                ))}
            </div>
        </div>
    );
};

export default GoodsStatusRow;
