import { Request, Response } from "express";

// GET /users => Obtener el listado de todos los usuarios.
export const getAllUsers = (_req: Request, res: Response) => {
    res.send("Obtener el listado de todos los usuarios.");
};

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUserById = (_req: Request, res: Response) => {
    res.send("Obtener el detalle de un usuario específico.");
};
// POST /users/register => Registro de un nuevo usuario.
export const registerUser = (_req: Request, res: Response) => {
    res.send("Registro de un nuevo usuario.");
};    
// POST /users/login => Login del usuario a la aplicación.
export const loginUser = (_req: Request, res: Response) => {
    res.send("Login del usuario a la aplicación.");
};   

