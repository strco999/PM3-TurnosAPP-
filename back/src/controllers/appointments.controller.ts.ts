import { Request, Response } from "express";

export const getAppointments = (_req: Request, res: Response) => {
  res.send("GET /appointments -> listar todos los turnos");
};

export const getAppointmentById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`GET /appointments/${id} -> detalle del turno ${id}`);
};

export const scheduleAppointment = (req: Request, res: Response) => {
  // const { userId, date, ... } = req.body;
  res.status(201).send("POST /appointments/schedule -> agendar nuevo turno");
};

export const cancelAppointment = (req: Request, res: Response) => {
  // id puede venir por body, query o params según diseño; aquí ejemplo por body:
  const { id } = req.body ?? {};
  res.send(`PUT /appointments/cancel -> marcar turno ${id ?? "(sin id)"} como 'cancelled'`);
};
