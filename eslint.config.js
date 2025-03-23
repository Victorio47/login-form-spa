import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["dist"],
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": "warn",

      // ✅ Стиль
      semi: ["error", "always"], // Всегда точка с запятой
      quotes: ["error", "double", { avoidEscape: true }], // Двойные кавычки
      "comma-dangle": ["error", "only-multiline"], // Запятая в многострочных объектах
      "object-curly-spacing": ["error", "always"], // Пробелы внутри `{ объект }`
      "array-bracket-spacing": ["error", "never"], // Пробелы внутри `[массив]`
      "eol-last": ["error", "always"], // Пуста строка в конце файла

      // ✅ Чистота кода
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ], // Удалять неиспользуемые переменные
      "no-console": "warn", // Не забывать убирать `console.log()`
      "no-debugger": "error", // Запрет `debugger`
      "no-duplicate-imports": ["error"], // Убирает дубликаты импорта
      "unused-imports/no-unused-imports": "error", // Удалять неиспользуемые импорты

      // ✅ TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Удалять неиспользуемые переменные
      "@typescript-eslint/consistent-type-imports": "error", // `import type { X }`
      "@typescript-eslint/no-explicit-any": "warn", // `any` подсвечивать

      // ✅ React / JSX
      "react-hooks/exhaustive-deps": "warn", // `useEffect` без зависимостей
      "react/no-array-index-key": ["warn"], // `key={index}` нельзя
      "react/jsx-no-duplicate-props": ["warn"], // `prop="a" prop="b"` — ошибка
    },
  },
];
