import { useState, useMemo, useCallback } from 'react';

const INITIAL_FILTER_STATE = { query: '', filter: 'all' };

/**
 * Хук для управления фильтрами и поиском
 * @param {Array} items - Массив товаров для фильтрации
 * @returns {Object} Объект с состоянием фильтров и отфильтрованными товарами
 */
export const useFilters = (items = []) => {
  const [filters, setFilters] = useState(INITIAL_FILTER_STATE);

  /**
   * Обновляет фильтры
   * Поддерживает как объект, так и функцию (как setState)
   */
  const updateFilters = useCallback((newFilters) => {
    if (typeof newFilters === 'function') {
      setFilters(prev => {
        const updated = newFilters(prev);
        return { ...prev, ...updated };
      });
    } else {
      setFilters(prev => ({ ...prev, ...newFilters }));
    }
  }, []);

  /**
   * Сбрасывает фильтры
   */
  const resetFilters = useCallback(() => {
    setFilters(INITIAL_FILTER_STATE);
  }, []);

  /**
   * Устанавливает фильтр по типу
   */
  const setFilterType = useCallback((filterType) => {
    setFilters(prev => ({ ...prev, filter: filterType }));
  }, []);

  /**
   * Устанавливает поисковый запрос
   */
  const setQuery = useCallback((query) => {
    setFilters(prev => ({ ...prev, query }));
  }, []);

  /**
   * Мемоизированный список отфильтрованных товаров
   */
  const filteredItems = useMemo(() => {
    if (!items || items.length === 0) {
      return [];
    }

    const { filter: filterType, query } = filters;
    const searchLower = query?.toLowerCase().trim() || '';

    return items.filter(item => {
      // Фильтр по типу
      if (filterType !== 'all' && item.type_of !== filterType) {
        return false;
      }

      // Поиск по запросу
      if (searchLower) {
        const searchString = `${item.name} ${item.title} nft`.toLowerCase();
        if (!searchString.includes(searchLower)) {
          return false;
        }
      }

      return true;
    });
  }, [items, filters]);

  return {
    filters,
    filteredItems,
    updateFilters,
    resetFilters,
    setFilterType,
    setQuery,
  };
};

