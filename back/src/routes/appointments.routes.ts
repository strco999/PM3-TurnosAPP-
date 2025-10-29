import { Router } from "express";
import {
  getAppointments,
  getAppointmentById,
  scheduleAppointment,
  cancelAppointment,
} from "../controllers/appointments.controller.ts";

const router = Router();

router.get("/", getAppointments);
router.get("/:id", getAppointmentById);
router.post("/schedule", scheduleAppointment);
router.put("/cancel", cancelAppointment);

export default router;
