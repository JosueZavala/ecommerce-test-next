# 🛒 E-commerce Test — Next.js + TypeScript

Un e-commerce de ejemplo construido con **Next.js (App Router)** y **TypeScript**, diseñado como base para proyectos reales: modular, escalable y con separación clara entre UI, lógica, hooks, contextos y utilidades. Ideal para practicar o extender hacia pasarelas de pago, checkout real, panel de administración o un catálogo completo.

---

## 🏷️ Badges

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## 📌 Características

- ✅ **Next.js App Router** (`app/`)
- ✅ **TypeScript**
- ✅ **Arquitectura modular**
- ✅ **Tailwind CSS**
- ✅ **Componentes reutilizables**
- ✅ **Context + Hooks para estado global**
- ✅ **Preparado para escalar (API, checkout, etc.)**

---

## 📁 Estructura del Proyecto

```
app/            # Páginas y rutas (App Router)
components/     # Componentes reutilizables
contexts/       # React Context API
hooks/          # Custom hooks
lib/            # Utilidades y lógica reusable
public/         # Assets e imágenes
styles/         # Estilos globales y Tailwind
```

---

## 🚀 Instalación y uso local

Requisitos:
- Node.js 18+
- pnpm / npm / yarn (cualquiera)

Instala dependencias y corre el servidor:

```bash
# con pnpm
pnpm install
pnpm dev

# con npm
npm install
npm run dev

# con yarn
yarn install
yarn dev
```

La app levantará en:

```
http://localhost:3000
```

---

## 🔧 Variables de entorno

Si utilizas APIs, DB o pasarela, crea un archivo:

```
.env.local
```

Ejemplo:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# STRIPE_SECRET_KEY=...
# DATABASE_URL=...
```

---

## 🗺️ Roadmap

- [ ] Carrito persistente
- [ ] Checkout (mock)
- [ ] Integración con Stripe
- [ ] Página de órdenes
- [ ] Admin dashboard
- [ ] Tests unitarios (Jest/RTL)
- [ ] Tests e2e (Playwright/Cypress)
- [ ] CI/CD (GitHub Actions)

---

## 🤝 Contribuciones

Las PRs son bienvenidas.  
Flujo sugerido:

1. `git checkout -b feature/nueva-funcionalidad`
2. Commits claros
3. Pull Request

---

## 🧑 Autor

**Josué Zavala**  
Frontend / Full-Stack — TypeScript, React, Next.js

---

## 📄 Licencia

Este proyecto está bajo licencia **MIT**.
