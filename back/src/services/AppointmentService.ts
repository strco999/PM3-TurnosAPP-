import { FindManyOptions } from "typeorm";
import { appointmentRepository } from "../config/data-source";
import { iCreateAppointmentDTO } from "../dtos/iCreateAppointmentDTO";
import { Appointment } from "../entities/Appoinment";
import { AppointmentStatus, IAppointment } from "../interfaces/IAppointment";
import { getUserByIdService } from "../services/UserService";


export const getAllAppointmentsService = async (
    userId: number | null = null
): Promise<Appointment[]> =>{
    const options: FindManyOptions <Appointment>= {};

    if(userId) {
        options.where = {
            user: {
                id: userId,
            },
        };
    }

    const appointments = await appointmentRepository.find(options);

    if (appointments.length == 0){
        throw new Error("No hay turnos disponibles");
    }


    return appointments;
};


export const getAppointmentByIdService = async (id: number): Promise<Appointment>=> {
    const foundAppointment: null | Appointment = await appointmentRepository.findOne({
        where: {
            id,
        },

    });

    if (!foundAppointment){
        throw new Error ("Turno no encontrado");
    }
    return foundAppointment;
};





export const createAppointmentService =  async (
    createAppointmentDTO: iCreateAppointmentDTO
):Promise<Appointment> =>{
    const foundUser = await getUserByIdService(createAppointmentDTO.userId);
   
    const newAppoinment: Appointment = await appointmentRepository.create({
        date: createAppointmentDTO.date,
        time: createAppointmentDTO.time,
        user: foundUser,
        status: AppointmentStatus.ACTIVE,
    });

   const result = await appointmentRepository.save(newAppoinment);
   return result;
};



export const cancelAppointmentService = async (id: number): Promise<number>=> {
    const foundAppointment = await getAppointmentByIdService(id);

    if (foundAppointment.status == AppointmentStatus.CANCELLED){
        throw new Error ("el turno ya esta cancelado");
    }

    foundAppointment.status = AppointmentStatus.CANCELLED;
    const results = await appointmentRepository.save(foundAppointment);

    return results.id;
};

