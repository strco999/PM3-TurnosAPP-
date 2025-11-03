// src/controllers/appointmentsController.ts
import { Request, Response } from "express";
import {
  getAllAppointmentsService,
  getAppointmentByIdService,
  createAppointmentService,
  cancelAppointmentService,
} from "../services/AppointmentService"; // <- ¡importa del service!

/////////////////////////////////////////////////////////////////////

// // GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
// export const getAllAppointments = async (_req:Request, res: Response) => {
//     try { 
//       const appointments = await getAllAppointmentsService();
//       res.status(200).json(appointments);

//     } catch (error: any) {
//       res.status(400).json({  
//         message: error.message,
//      });
//     }    //   
// };
// // GET /appointments => Obtener el detalle de un turno específico.
// export const getAppointmentById = async (_req:Request, res: Response) => {
//      try {        
//     } catch (error: any) {
//       res.status(400).json({  
//         message: error.message,
//      });
//     }    //   
// };
// // POST /appointments/schedule => Agendar un nuevo turno.
// export const createAppointment = async (_req:Request, res: Response) => {
//      try {        
//     } catch (error: any) {
//       res.status(400).json({  
//         message: error.message,
//      });
//     }    //   
// };
// // PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
// export const  cancelAppointment = async (_req:Request, res: Response) => {
//      try {        
//     } catch (error: any) {
//       res.status(400).json({  
//         message: error.message,
//      });
//     }    //   
// };

////////////////////////////////////////////



// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
export const getAllAppointments = async (_req: Request, res: Response) => {
  try {
    const appointments = await getAllAppointmentsService();
    res.status(200).json(appointments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /appointments/:id => Obtener el detalle de un turno específico.
export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Parámetro id inválido" });
    }
    const appointment = await getAppointmentByIdService(id);
    res.status(200).json(appointment);
  } catch (error: any) {
    // si el service tira "Turno no encontrado", devolver 404 es razonable
    const status = /no encontrado/i.test(error.message) ? 404 : 400;
    res.status(status).json({ message: error.message });
  }
};

// POST /appointments/schedule => Agendar un nuevo turno.
export const createAppointment = async (req: Request, res: Response) => {
  try {
    // Espera body: { userId:number, date:string, time:string }
    const { userId, date, time } = req.body || {};
    if (!userId || !date || !time) {
      return res.status(400).json({ message: "Faltan campos requeridos: userId, date, time" });
    }
    const created = await createAppointmentService({ userId: Number(userId), date, time });
    res.status(201).json(created);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    // Puedes tomar el id por body o por /:id; ajusta a tu router
    const id = Number(req.body?.id ?? req.params?.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Parámetro id inválido" });
    }
    const cancelledId = await cancelAppointmentService(id);
    res.status(200).json({ id: cancelledId, status: "cancelled" });
  } catch (error: any) {
    // si ya estaba cancelado, el service lanza error — devolver 409 es útil
    const status = /ya esta cancelado/i.test(error.message) ? 409 : 400;
    res.status(status).json({ message: error.message });
  }
};