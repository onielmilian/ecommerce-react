# 🚀 Proyecto Full Stack con Next.js + Strapi

Este proyecto es una aplicación full stack construida con:

- **Next.js** (frontend)
- **Strapi** (backend CMS/API headless)
- **Zustand** (gestión de estado global)
- **Shadcn UI** (sistema de componentes estilizados)
- **Lucide** (íconos open-source)

---

## 📦 Tecnologías

| Herramienta    | Descripción                                |
|----------------|--------------------------------------------|
| [Next.js](https://nextjs.org/) | Framework React con routing, SSR y más |
| [Strapi](https://strapi.io/) | Headless CMS/API con autenticación |
| [Zustand](https://zustand-demo.pmnd.rs/) | Estado global simple y escalable |
| [Shadcn UI](https://ui.shadcn.com/) | Componentes accesibles con Tailwind |
| [Lucide](https://lucide.dev/) | Íconos SVG modernos y personalizables |

---

## 🗂️ Estructura del Proyecto

```
.
├── backend-ecommerce/         # Proyecto Strapi (API REST)
└── frontend-ecommerce/        # Proyecto Next.js
    ├── app/         # Rutas y páginas
    ├── components/  # Componentes reutilizables
    ├── store/       # Estados globales con Zustand
    └── ui/          # Componentes personalizados (Shadcn)
```

---

## ⚙️ Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/onielmilian/ecommerce-react.git
cd ecommerce-react
```

### 2. Backend (Strapi)

```bash
cd backend-ecommerce
npm install
npm run dev
```
Backend alojado en: http://localhost:1337/admin

> Crea un usuario administrador al iniciar por primera vez.

### 3. Frontend (Next.js)

```bash
cd frontend-ecommerce
npm install
npm run dev
```

Frontend alojado en: http://localhost:3000

---

## 🧠 Estado Global (Zustand)

Zustand se utiliza para manejar el estado global de forma simple y eficiente, sin boilerplate.

---

## 💅 Estilos y UI

- **Tailwind CSS** está integrado.
- **Shadcn UI** se usa para componentes accesibles y personalizables.
- **Lucide** se usa para íconos SVG modernos.

```tsx
// Ejemplo de uso en un componente
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

<Button>
  <User className="mr-2" />
  Perfil
</Button>
```

---

## ✅ TODO

- [ ] Nada

---
