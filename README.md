# PM3 — Turnos App (Full Stack)

Aplicación para **registro/login de usuarios** y **gestión de turnos**: agendar, listar y cancelar turnos con reglas de validación (horario hábil y cancelación con anticipación).

📦 Monorepo:
- `front/` → Frontend (React + Vite)
- `back/` → Backend (Express + TypeORM + PostgreSQL)

---

## 🧩 Tech Stack

### Frontend
- React + Vite 
- React Router DOM 
- Axios 
- Formik   

### Backend
- Node.js + Express 
- TypeORM + PostgreSQL  
- Auth (bcryptjs) + dotenv 
- CORS 
---

## ✅ Funcionalidades

- 🔐 **Registro y login** de usuarios
- 📅 **Agendar turnos** (con validaciones de negocio)
- 👀 **Ver turnos** (futuros / pasados)
- ❌ **Cancelar turnos** (solo con anticipación)
- 🧾 **Estado del turno**: activo / cancelado (según reglas)

> Las reglas de negocio principales están descritas en los *User Stories* del repo. 

---

## 🔌 Endpoints principales (Backend)

Documentación base en `rutas.md`: 

### Usuarios
- `GET /user/:id` → Obtener usuario por id + sus turnos 
- `POST /user/register` → Crear usuario 
- `POST /users/login` → Login 

### Turnos
- `GET /turns` → Listar todos los turnos 
- `GET /turns/:id` → Detalle de un turno   
- `POST /turns/schedule` → Crear turno  
- `PUT /turns/cancel/:id` → Cancelar turno 

---

## ⚙️ Instalación y ejecución (Local)

### 1) Clonar
```bash
git clone https://github.com/strco999/PM3-TurnosAPP-.git
cd PM3-TurnosAPP-


▶️ Backend (Express + TypeORM)
cd back
npm install
npm run dev
Variables de entorno (Backend)

Crea back/.env (nombres típicos; ajusta a los que uses en tu config):

PORT=3001

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=turnos_app

JWT_SECRET=tu_secret

El backend usa dotenv, pg y typeorm, así que la configuración va por variables de entorno + conexión a PostgreSQL.

▶️ Frontend (React + Vite)
cd front
npm install
npm run dev
Variables de entorno (Frontend)

Si tu front consume una API, normalmente se usa una env tipo:

VITE_API_URL=http://localhost:3001

(Colócala en front/.env si tu código la utiliza.)

Scripts disponibles en el front: dev, build, preview, lint.

🗂️ Scripts
Front (/front)

npm run dev — desarrollo

npm run build — build

npm run preview — preview del build

npm run lint — lint

Back (/back)

npm run dev — nodemon (desarrollo)

npm run build — compilar TypeScript

npm run start — correr build (dist/index.js)

🧪 Datos de prueba (opcional)

Puedes agregar aquí un usuario demo y ejemplos de requests (si quieres, te lo armo con cURL/Postman basado en tu API real).

📫 Contacto

GitHub: https://github.com/strco999

LinkedIn: https://www.linkedin.com/in/nicolasgsanchezdev/

Email: strco999@gmail.com
