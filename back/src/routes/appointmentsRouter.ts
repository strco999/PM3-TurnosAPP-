import { Router } from "express";

import {
  getAllAppointments,
  getAllAppointmentById, // si cambias el nombre en el controller, actualiza aquí también
  createAppointment,
  cancelAppointment,
} from "../controllers/appointmentsController"

const appointmentsRouter = Router();

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentsRouter.get("/", getAllAppointments);

// GET /appointments => Obtener el detalle de un turno específico.
appointmentsRouter.get("/:id", getAllAppointmentById);
// POST /appointments/schedule => Agendar un nuevo turno.
appointmentsRouter.post("/schedule",createAppointment);
// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.put("/cancel",cancelAppointment);

export default appointmentsRouter;