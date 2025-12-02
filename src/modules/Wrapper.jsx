import { useMemo, useCallback } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Basket from './Basket';
import { useBasket } from '../hooks/useBasket';
import { useFilters } from '../hooks/useFilters';
import { useSidebar } from '../hooks/useSidebar';
import { useSearch } from '../hooks/useSearch';
import { useMarketItems } from '../hooks/useMarketItems';

// Константы фильтров
const FILTERS = [
  {
    value: "all",
    label: "All",
    isActive: true
  },
  {
    value: "art",
    label: "Art",
    isActive: false
  },
  {
    value: "pixel",
    label: "Pixel",
    isActive: false
  }
];

/**
 * Главный компонент-обертка приложения
 * Управляет состоянием корзины, фильтров, сайдбара и поиска
 */
function Wrapper() {
  // Хуки для управления состоянием
  const { goodItems, findItemByName } = useMarketItems();
  const {
    basket,
    basketActive,
    addToBasket,
    deleteFromBasket,
    toggleBasket,
  } = useBasket();
  
  const {
    filters,
    filteredItems,
    updateFilters,
  } = useFilters(goodItems);
  
  const {
    sidebarActive,
    toggleSidebar,
  } = useSidebar(false);
  
  const {
    queryPlaceholder,
    setQueryPlaceholder,
    showTypingPlaceholder,
  } = useSearch();

  // Обработчик добавления товара в корзину
  const handleAddToCard = useCallback((name) => {
    const foundItem = findItemByName(name);
    if (foundItem) {
      const added = addToBasket(foundItem);
      if (!added) {
        console.log('Item already in basket:', name);
      }
    }
  }, [findItemByName, addToBasket]);

  // Обработчик удаления из корзины
  const handleDeleteFromBasket = useCallback((title) => {
    deleteFromBasket(title);
  }, [deleteFromBasket]);

  return (
    <div className="wrapper">
      <Basket
        BasketTasks={basket}
        onDeleteBusketCard={handleDeleteFromBasket}
        isActive={basketActive}
      />

      <Sidebar
        sidebarActive={sidebarActive}
        SidebarHanndleClose={toggleSidebar}
      />

      <Main
        filters={FILTERS}
        title="Trending Bids"
        SidebarHanndleClose={toggleSidebar}
        queryPlaceHolder={queryPlaceholder}
        showQueryPlaceHolder={showTypingPlaceholder}
        setQueryPlaceHolder={setQueryPlaceholder}
        SetFilters={updateFilters}
        currentFilter={filters}
        OnSetBasketActive={toggleBasket}
        onAddToCard={handleAddToCard}
        filteredItems={filteredItems}
      />
    </div>
  );
}

export default Wrapper;
