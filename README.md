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
    ├── api/         # Api endpoints
    ├── hooks/         # Custom hooks
    ├── src/
        ├── app/         # Rutas y páginas
            ├── (auth)/         # Rutas y páginas autenticacion
                ├── login/         # Pagina de login
                ├── register/         # Pagina de registro
            ├── (routes)/         # Rutas y páginas
                ├── brand/         # Página brand
                ├── home/         # Página home
                ├── cart/         # Página cart
                ├── loved-products/         # Página loved-products
                ├── products/         # Página products
                ├── profile/         # Página profile
        ├── components/  # Componentes reutilizables
            └── ui/          # Componentes personalizados (Shadcn)
        └── lib/          # Utiles
    ├── Types/         # Tipos de datos
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


## 🔐 Variables de entorno

### Backend (`backend/.env`)
```env
# Server
HOST=localhost
PORT=1337

# Database (ejemplo)
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=ecommerce-db
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=admin
DATABASE_SSL=false
DATABASE_FILENAME=
JWT_SECRET=T++2kIzT4I30Nj6OuMVaeA==
```

### Frontend (`frontend/.env.local`)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:1337
```

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

- [ ] Nada :)

---
