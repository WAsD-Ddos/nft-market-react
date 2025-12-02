import { useState, useCallback, useEffect } from 'react';

const BASKET_LOCAL_STORAGE_KEY = 'BasketLocal';

/**
 * Хук для управления корзиной товаров
 * @returns {Object} Объект с состоянием и методами корзины
 */
export const useBasket = () => {
  const [basket, setBasket] = useState(() => {
    try {
      const savedBasket = localStorage.getItem(BASKET_LOCAL_STORAGE_KEY);
      return savedBasket ? JSON.parse(savedBasket) : [];
    } catch (error) {
      console.error('Ошибка при загрузке корзины из localStorage:', error);
      return [];
    }
  });

  const [basketActive, setBasketActive] = useState(false);

  // Синхронизация с localStorage
  useEffect(() => {
    try {
      localStorage.setItem(BASKET_LOCAL_STORAGE_KEY, JSON.stringify(basket));
    } catch (error) {
      console.error('Ошибка при сохранении корзины в localStorage:', error);
    }
  }, [basket]);

  /**
   * Проверяет, есть ли товар в корзине
   */
  const hasInBasket = useCallback((name) => {
    return basket.some(item => item.name === name);
  }, [basket]);

  /**
   * Добавляет товар в корзину
   */
  const addToBasket = useCallback((item) => {
    if (!hasInBasket(item.name)) {
      const itemToBasket = {
        key: `${item.name}_${Date.now()}`,
        name: item.name,
        type_of: item.type_of,
        imageSrc: item.imageSrc,
        title: item.title,
        auctionTime: item.auctionTime,
        currentBid: item.currentBid,
      };

      setBasket(prev => [...prev, itemToBasket]);
      return true;
    }
    return false;
  }, [hasInBasket]);

  /**
   * Удаляет товар из корзины по title
   */
  const deleteFromBasket = useCallback((title) => {
    setBasket(prev => prev.filter(item => item.title !== title));
  }, []);

  /**
   * Очищает корзину
   */
  const clearBasket = useCallback(() => {
    setBasket([]);
  }, []);

  /**
   * Переключает видимость корзины
   */
  const toggleBasket = useCallback(() => {
    setBasketActive(prev => !prev);
  }, []);

  /**
   * Открывает корзину
   */
  const openBasket = useCallback(() => {
    setBasketActive(true);
  }, []);

  /**
   * Закрывает корзину
   */
  const closeBasket = useCallback(() => {
    setBasketActive(false);
  }, []);

  return {
    basket,
    basketActive,
    hasInBasket,
    addToBasket,
    deleteFromBasket,
    clearBasket,
    toggleBasket,
    openBasket,
    closeBasket,
  };
};

