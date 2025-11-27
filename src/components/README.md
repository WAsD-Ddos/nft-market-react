# Структура компонентов

## Описание компонентов

### Sidebar компоненты
- **SidebarNavItem** (`sidebar/SidebarNavItem.jsx`)
  - Компонент элемента навигации в сайдбаре
  - Будет принимать пропсы: `icon`, `alt`, `href`
  - Используется 6 раз в Sidebar

### Goods компоненты (товары)
- **GoodsCard** (`goods/GoodsCard.jsx`)
  - Компонент карточки товара
  - Будет принимать пропсы: `name`, `type_of`, `imageSrc`, `title`, `auctionTime`, `currentBid`
  - Используется внутри GoodsCardsList

- **GoodsCardButton** (`goods/GoodsCardButton.jsx`)
  - Компонент кнопки добавления в корзину
  - Будет принимать пропсы: `onClick`, `children`, `wrappedInLink`
  - Используется внутри GoodsCard

- **FilterButton** (`goods/FilterButton.jsx`)
  - Компонент кнопки фильтра (All, Art, Pixel)
  - Будет принимать пропсы: `value`, `label`, `isActive`, `onClick`
  - Используется 3 раза в GoodsStatusRow

- **GoodsStatusRow** (`goods/GoodsStatusRow.jsx`)
  - Компонент строки статуса товаров (заголовок + кнопки фильтров)
  - Будет принимать пропсы: `title`, `filters`
  - Используется в Main

- **GoodsCardsList** (`goods/GoodsCardsList.jsx`)
  - Компонент списка карточек товаров
  - Будет принимать пропсы: `items` (массив карточек)
  - Будет рендериться массивом (массив создашь сам)
  - Используется в Main

### Header компоненты
- **SearchForm** (`header/SearchForm.jsx`)
  - Компонент формы поиска
  - Будет принимать пропсы: `onSubmit`, `placeholder`, `hints`
  - Используется в Header

- **ToolsButton** (`header/ToolsButton.jsx`)
  - Компонент кнопки в tools (mode, basket, profile)
  - Будет принимать пропсы: `iconSrc`, `alt`, `onClick`, `className`
  - Используется 3 раза в Header

## Структура папок

```
src/
├── components/
│   ├── sidebar/
│   │   └── SidebarNavItem.jsx
│   ├── goods/
│   │   ├── GoodsCard.jsx
│   │   ├── GoodsCardButton.jsx
│   │   ├── FilterButton.jsx
│   │   ├── GoodsStatusRow.jsx
│   │   └── GoodsCardsList.jsx
│   └── header/
│       ├── SearchForm.jsx
│       └── ToolsButton.jsx
└── modules/
    ├── Sidebar.jsx
    ├── Main.jsx
    ├── Header.jsx
    └── Basket.jsx
```



