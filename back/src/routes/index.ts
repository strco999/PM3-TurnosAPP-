import { Router } from "express";
import userRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRouter";

const router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentsRouter); // ✅ corregido

export default router;
