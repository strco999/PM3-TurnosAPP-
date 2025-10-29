import express from "express";
import usersRouter from "./routes/users.routes";
import appointmentsRouter from "./routes/appointments.routes";

export const app = express();

app.use(express.json());

// Rutas base
app.use("/users", usersRouter);
app.use("/appointments", appointmentsRouter);

// Healthcheck opcional
app.get("/", (_req, res) => res.send("OK - API base"));
