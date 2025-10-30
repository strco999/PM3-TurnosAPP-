import { Router } from "express";

const usersRouter = Router();

// GET /users => Obtener el listado de todos los usuarios.
usersRouter.get("/");

// GET /users/:id => Obtener el detalle de un usuario específico.
usersRouter.get("/:id");
// POST /users/register => Registro de un nuevo usuario.
usersRouter.post("/register");
// POST /users/login => Login del usuario a la aplicación.
usersRouter.post("/login");


export default usersRouter;