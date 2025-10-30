import { Router } from "express";

const appointmentsRouter = Router();

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentsRouter.get("/"),

// GET /appointments => Obtener el detalle de un turno específico.
appointmentsRouter.get("/:id");
// POST /appointments/schedule => Agendar un nuevo turno.
appointmentsRouter.post("shedule");
// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.put("/cancel");

export default appointmentsRouter;