# Кастомные хуки

Этот каталог содержит переиспользуемые хуки для управления состоянием приложения.

## useBasket

Управление корзиной товаров с синхронизацией с localStorage.

```javascript
const {
  basket,              // Массив товаров в корзине
  basketActive,        // Состояние видимости корзины
  hasInBasket,         // Функция проверки наличия товара
  addToBasket,         // Функция добавления товара
  deleteFromBasket,    // Функция удаления товара
  clearBasket,         // Функция очистки корзины
  toggleBasket,        // Переключение видимости
  openBasket,          // Открытие корзины
  closeBasket,         // Закрытие корзины
} = useBasket();
```

## useFilters

Управление фильтрами и поиском товаров.

```javascript
const {
  filters,             // Объект { query: string, filter: string }
  filteredItems,       // Мемоизированный массив отфильтрованных товаров
  updateFilters,      // Обновление фильтров
  resetFilters,        // Сброс фильтров
  setFilterType,       // Установка типа фильтра
  setQuery,            // Установка поискового запроса
} = useFilters(items);
```

## useSidebar

Управление состоянием сайдбара.

```javascript
const {
  sidebarActive,      // Состояние сайдбара
  toggleSidebar,       // Переключение состояния
  openSidebar,         // Открытие сайдбара
  closeSidebar,        // Закрытие сайдбара
} = useSidebar(initialValue);
```

## useSearch

Управление поиском с анимацией placeholder.

```javascript
const {
  queryPlaceholder,    // Текущий placeholder
  setQueryPlaceholder, // Установка placeholder
  showTypingPlaceholder, // Анимация печатания
  resetPlaceholder,    // Сброс placeholder
} = useSearch();
```

## useMarketItems

Работа с товарами из контекста MarketContext.

```javascript
const {
  goodItems,           // Массив всех товаров
  findItemByName,     // Поиск товара по имени
  itemExists,          // Проверка существования товара
} = useMarketItems();
```

