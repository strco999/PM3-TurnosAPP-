import { getUserByIdService } from "../services/UserService";
import { iCreateAppointmentDTO } from "../dtos/iCreateAppointmentDTO";
import { AppointmentStatus, IAppointment } from "../interfaces/IAppointment";

const appointmentDB: IAppointment[] = [];
let appointmentId: number = 1;


export const getAllAppointmentsService = async (): Promise<IAppointment[]> =>{
    return appointmentDB;
};


export const getAppointmentByIdService = async (id: number): Promise<IAppointment>=> {
    const foundAppointment: undefined | IAppointment = appointmentDB.find(
        (appointment)=> appointment.id == id
    );

    if (!foundAppointment){
        throw new Error ("Turno no encontrado");
    }
    return foundAppointment;
};



export const createAppointmentService =  async (createAppointmentDTO: iCreateAppointmentDTO):Promise<IAppointment> =>{
    const foundUser = await getUserByIdService(createAppointmentDTO.userId);
   
    const newAppoinment: IAppointment = {
    id: appointmentId++,
    date: createAppointmentDTO.date,
    time: createAppointmentDTO.time,
    userId: foundUser.id,
    status: AppointmentStatus.ACTIVE,
   };  
   appointmentDB.push(newAppoinment);
   return newAppoinment;
};



export const cancelAppointmentService = async (id: number): Promise<number>=> {
    const foundAppointment = await getAppointmentByIdService(id);

    if (foundAppointment.status == AppointmentStatus.CANCELLED){
        throw new Error ("el turno ya esta cancelado");
    }

    foundAppointment.status = AppointmentStatus.CANCELLED;

    return foundAppointment.id;
};

