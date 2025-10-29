import { Request, Response } from "express";

export const getUsers = (_req: Request, res: Response) => {
  res.send("GET /users -> listar todos los usuarios");
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`GET /users/${id} -> detalle del usuario ${id}`);
};

export const registerUser = (req: Request, res: Response) => {
  // const { username, password, ... } = req.body;
  res.status(201).send("POST /users/register -> registrar nuevo usuario (Credential + User)");
};

export const loginUser = (req: Request, res: Response) => {
  // const { username, password } = req.body;
  res.send("POST /users/login -> login del usuario (verificar Credential)");
};
