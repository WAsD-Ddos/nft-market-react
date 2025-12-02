import { memo, useMemo } from 'react';
import GoodsCard from './GoodsCard';

/**
 * Компонент списка карточек товаров
 * Оптимизирован с помощью memo для предотвращения лишних ререндеров
 */
const GoodsCardsList = memo((props) => {
    const { onAddToCard, filteredItems, currentFilter } = props;
    
    // Определяем, применены ли фильтры
    const isFiltered = useMemo(() => {
        return currentFilter?.filter !== 'all' || (currentFilter?.query && currentFilter.query.trim() !== '');
    }, [currentFilter]);
   
    // Проверяем, что filteredItems существует и это массив
    if (!filteredItems || !Array.isArray(filteredItems)) {
        return (
            <div className="goods__cards">
                <div className="no-results">Загрузка...</div>
            </div>
        );
    }

    // Показываем сообщение, если ничего не найдено при примененных фильтрах
    if (isFiltered && filteredItems.length === 0) {
        return (
            <div className="goods__cards">
                <div className="no-results">Ничего не найдено</div>
            </div>
        );
    }

    // Рендерим карточки товаров
    return (
        <div className="goods__cards">
            {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                    <GoodsCard
                        key={`${item.name}_${index}`}
                        name={item.name}
                        type_of={item.type_of}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        auctionTime={item.auctionTime}
                        currentBid={item.currentBid}
                        onAddToCard={onAddToCard}
                    />
                ))
            ) : (
                <div className="no-results">Нет товаров</div>
            )}
        </div>
    );
});

GoodsCardsList.displayName = 'GoodsCardsList';

export default GoodsCardsList;