import { Request, Response } from "express";



// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
export const getAllAppointments = (_req:Request, res: Response) => {
  res.send("Obtener el listado de todos los turnos de todos los usuarios.");
};
// GET /appointments => Obtener el detalle de un turno específico.
export const getAllAppointmentById = (_req:Request, res: Response) => {
  res.send("Obtener el detalle de un turno específico.");
};
// POST /appointments/schedule => Agendar un nuevo turno.
export const createAppointment = (_req:Request, res: Response) => {
  res.send("Agendar un nuevo turno.");
};
// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
export const  cancelAppointment = (_req:Request, res: Response) => {
  res.send("Cambiar el estatus de un turno a “cancelled”.");
};