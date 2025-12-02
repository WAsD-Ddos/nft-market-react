import { useState, useRef, useCallback, useEffect } from 'react';

const DEFAULT_PLACEHOLDER = 'Search here';

/**
 * Хук для управления поиском с анимацией placeholder
 * @returns {Object} Объект с состоянием и методами поиска
 */
export const useSearch = () => {
  const [queryPlaceholder, setQueryPlaceholder] = useState(DEFAULT_PLACEHOLDER);
  const typingIntervalRef = useRef(null);

  /**
   * Очищает интервал анимации
   */
  const clearTypingInterval = useCallback(() => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
  }, []);

  /**
   * Показывает анимацию печатания placeholder
   */
  const showTypingPlaceholder = useCallback(() => {
    clearTypingInterval();

    const fullText = DEFAULT_PLACEHOLDER;
    let currentText = '';
    let index = 0;

    typingIntervalRef.current = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setQueryPlaceholder(currentText);
        index++;
      } else {
        clearTypingInterval();
      }
    }, 100);
  }, [clearTypingInterval]);

  /**
   * Сбрасывает placeholder
   */
  const resetPlaceholder = useCallback(() => {
    clearTypingInterval();
    setQueryPlaceholder(DEFAULT_PLACEHOLDER);
  }, [clearTypingInterval]);

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      clearTypingInterval();
    };
  }, [clearTypingInterval]);

  return {
    queryPlaceholder,
    setQueryPlaceholder,
    showTypingPlaceholder,
    resetPlaceholder,
  };
};

