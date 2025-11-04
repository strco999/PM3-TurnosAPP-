import { Router } from "express";
import {
  getAllAppointments,
  getAppointmentById,     // nombre consistente
  createAppointment,
  cancelAppointment,
} from "../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:id", getAppointmentById);
appointmentsRouter.post("/schedule", createAppointment);  // corrige "shedule" -> "schedule"
appointmentsRouter.put("/cancel/:id", cancelAppointment); // agrega :id

export default appointmentsRouter;
