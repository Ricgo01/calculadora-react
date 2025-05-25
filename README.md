<div align="center">

# 🧮 Calculadora React

### Una calculadora moderna construida con React, TypeScript y las mejores prácticas de desarrollo

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-3.1.4-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-8.4.7-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9.17.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

</div>

---

## ✨ Características

- 🎯 **Funcionalidad Completa**: Operaciones básicas (suma, resta, multiplicación, división) y modulo
- 🔄 **Función +/-**: Convierte números a negativos/positivos
- 📱 **Diseño Responsivo**: Interfaz moderna y elegante
- 🧪 **Testing Robusto**: Tests unitarios completos con Vitest
- 📖 **Documentación**: Componentes documentados con Storybook
- ⚡ **Desarrollo Rápido**: Configurado con Vite para desarrollo ágil
- 🔧 **Linting**: Código limpio con ESLint y JavaScript Standard

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/calculadora-react.git

# Navegar al directorio
cd calculadora-react

# Instalar dependencias
npm install
```

## 📋 Comandos Disponibles

<div align="center">

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `npm run dev` | 🚀 Ejecutar en modo desarrollo | Desarrollo local |
| `npm run build` | 📦 Construir para producción | Deploy |
| `npm run preview` | 👀 Previsualizar build | Testing de producción |
| `npm test` | 🧪 Ejecutar tests unitarios | Testing |
| `npm run storybook` | 📖 Ejecutar Storybook | Documentación de componentes |
| `npm run lint` | 🔍 Verificar código con ESLint | Control de calidad |

</div>

### 🖥️ Ejecutar la Calculadora

```bash
# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en:
# http://localhost:5173
```

### 🧪 Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Ejecutar tests con coverage
npm test -- --coverage
```

### 📖 Ejecutar Storybook

```bash
# Iniciar Storybook
npm run storybook

# Storybook estará disponible en:
# http://localhost:6006
```

## 🏗️ Tecnologías Utilizadas

<div align="center">

### Frontend
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)

### Herramientas de Desarrollo
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)](https://prettier.io/)

### Testing & Documentación
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Testing Library](https://img.shields.io/badge/Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)](https://playwright.dev/)

</div>

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Cumplidos

- [x] **Operaciones Básicas**: ➕ ➖ ✖️ ➗
- [x] **Operación Módulo**: % 
- [x] **Función +/-**: Cambio de signo
- [x] **Punto Decimal**: Números decimales
- [x] **Límite de Caracteres**: Máximo 9 caracteres en display
- [x] **Manejo de Errores**: 
  - División por cero → `ERROR`
  - Números negativos → `ERROR`
  - Overflow (>999,999,999) → `ERROR`
- [x] **Tests Unitarios**: 4 tests robustos implementados
- [x] **Documentación Storybook**: 27+ historias documentadas
- [x] **Linting**: ESLint configurado con JavaScript Standard
- [x] **Custom Hook**: `useCalculator` para gestión de estado
- [x] **Componentes Pequeños**: Todos los componentes <20 líneas

## 🧪 Coverage de Tests

Los tests cubren:

- ✅ Operaciones encadenadas (ej: 5 + 3 * 2 = 16)
- ✅ Manejo de errores (división por cero, overflow, negativos)
- ✅ Límite de caracteres y punto decimal
- ✅ Truncamiento de resultados (ej: 22/7 = 3.1428571)

## 📁 Estructura del Proyecto

```
calculadora-react/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 Calculator/
│   │   ├── 📂 Display/
│   │   ├── 📂 KeyPad/
│   │   ├── 📂 NumberButton/
│   │   ├── 📂 OperationButton/
│   │   └── 📂 RepoButton/
│   ├── 📂 hooks/
│   │   └── useCalculator.js
│   ├── 📂 stories/
│   ├── CalculatorContext.jsx
│   └── App.jsx
├── 📄 README.md
├── 📄 package.json
└── ⚙️ vite.config.js
```