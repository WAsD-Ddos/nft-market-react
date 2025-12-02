/**
 * Опасные паттерны для валидации поискового запроса
 */
const DANGEROUS_PATTERNS = [
  /<script\b[^>]*>([\s\S]*?)<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /eval\s*\(/gi,
  /alert\s*\(/gi,
  /document\./gi,
  /window\./gi,
  /<\/?\w+[^>]*>/gi,
];

/**
 * Валидирует поисковый запрос на наличие опасных паттернов
 * @param {string} value - Значение для валидации
 * @returns {Object} { isValid: boolean, cleanedValue: string }
 */
export const validateSearchQuery = (value) => {
  if (!value || !value.trim()) {
    return { isValid: false, cleanedValue: '' };
  }

  let cleanedValue = value;

  for (const pattern of DANGEROUS_PATTERNS) {
    if (pattern.test(cleanedValue)) {
      cleanedValue = cleanedValue.replace(pattern, '');
    }
  }

  return {
    isValid: cleanedValue.trim().length > 0,
    cleanedValue: cleanedValue.trim(),
  };
};

/**
 * Валидирует input элемент и фокусирует его при ошибке
 * @param {HTMLInputElement} input - Input элемент для валидации
 * @returns {boolean} true если валидация прошла успешно
 */
export const validateInput = (input) => {
  if (!input || !input.value.trim()) {
    if (input) input.focus();
    return false;
  }

  const { isValid, cleanedValue } = validateSearchQuery(input.value);

  if (!isValid) {
    alert('Обнаружен запрещенный код');
    input.value = cleanedValue;
    input.focus();
    return false;
  }

  return true;
};

