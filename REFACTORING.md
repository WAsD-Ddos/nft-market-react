# Рефакторинг кода - Оптимизация и структурирование

## Выполненные изменения

### 1. Создана структура кастомных хуков

Все состояния и логика вынесены в отдельные переиспользуемые хуки:

#### `src/hooks/useBasket.js`
- Управление корзиной товаров
- Синхронизация с localStorage
- Методы: addToBasket, deleteFromBasket, clearBasket, toggleBasket и др.

#### `src/hooks/useFilters.js`
- Управление фильтрами и поиском
- Мемоизированная фильтрация товаров
- Методы: updateFilters, resetFilters, setFilterType, setQuery

#### `src/hooks/useSidebar.js`
- Управление состоянием сайдбара
- Методы: toggleSidebar, openSidebar, closeSidebar

#### `src/hooks/useSearch.js`
- Управление поиском с анимацией placeholder
- Автоматическая очистка интервалов
- Методы: showTypingPlaceholder, resetPlaceholder

#### `src/hooks/useMarketItems.js`
- Работа с товарами из MarketContext
- Методы: findItemByName, itemExists

### 2. Создана утилита валидации

#### `src/utils/validation.js`
- Валидация поисковых запросов
- Защита от XSS атак
- Функции: validateSearchQuery, validateInput

### 3. Исправлена проблема с корзиной

- Исправлен класс в `Basket.jsx`: `activeBasket` → `active`
- Корзина теперь правильно отображается с затемнением

### 4. Оптимизация производительности

- Использование `useMemo` для фильтрации товаров
- Использование `useCallback` для всех обработчиков
- Мемоизация компонентов с помощью `memo()`
- Правильная очистка интервалов и подписок

### 5. Улучшена структура кода

- Разделение логики и представления
- Централизованный экспорт хуков через `hooks/index.js`
- Документация для всех хуков
- Чистый и читаемый код в `Wrapper.jsx`

## Преимущества нового подхода

1. **Переиспользуемость** - хуки можно использовать в любых компонентах
2. **Тестируемость** - логика изолирована и легко тестируется
3. **Производительность** - оптимизация с помощью memo и useMemo
4. **Читаемость** - код стал намного проще для понимания
5. **Поддерживаемость** - изменения в одном месте не влияют на другие

## Структура файлов

```
src/
├── hooks/
│   ├── useBasket.js
│   ├── useFilters.js
│   ├── useSidebar.js
│   ├── useSearch.js
│   ├── useMarketItems.js
│   ├── index.js
│   └── README.md
├── utils/
│   └── validation.js
└── modules/
    └── Wrapper.jsx (упрощен и оптимизирован)
```

## Использование

Все хуки можно импортировать из централизованного файла:

```javascript
import { useBasket, useFilters, useSidebar, useSearch } from '../hooks';
```

Или по отдельности:

```javascript
import { useBasket } from '../hooks/useBasket';
```

