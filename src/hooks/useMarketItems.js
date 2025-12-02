import { useCallback } from 'react';
import { useMarket } from '../components/Context/MarketContext';

/**
 * Хук для работы с товарами из контекста
 * @returns {Object} Объект с товарами и методами работы с ними
 */
export const useMarketItems = () => {
  const { goodItems } = useMarket();

  /**
   * Находит товар по имени
   */
  const findItemByName = useCallback((name) => {
    return goodItems.find(item => item.name === name);
  }, [goodItems]);

  /**
   * Проверяет существование товара
   */
  const itemExists = useCallback((name) => {
    return goodItems.some(item => item.name === name);
  }, [goodItems]);

  return {
    goodItems,
    findItemByName,
    itemExists,
  };
};

