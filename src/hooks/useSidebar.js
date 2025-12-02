import { useState, useCallback } from 'react';

/**
 * Хук для управления состоянием сайдбара
 * @param {boolean} initialValue - Начальное состояние сайдбара
 * @returns {Object} Объект с состоянием и методами управления сайдбаром
 */
export const useSidebar = (initialValue = false) => {
  const [sidebarActive, setSidebarActive] = useState(initialValue);

  /**
   * Переключает состояние сайдбара
   */
  const toggleSidebar = useCallback(() => {
    setSidebarActive(prev => !prev);
  }, []);

  /**
   * Открывает сайдбар
   */
  const openSidebar = useCallback(() => {
    setSidebarActive(true);
  }, []);

  /**
   * Закрывает сайдбар
   */
  const closeSidebar = useCallback(() => {
    setSidebarActive(false);
  }, []);

  return {
    sidebarActive,
    toggleSidebar,
    openSidebar,
    closeSidebar,
  };
};

