import { getUserById } from "../services/UserService";
import { iCreateAppointmentDTO } from "../dtos/iCreateAppointmentDTO";
import { AppointmentStatus, IAppointment } from "../interfaces/IAppointment";

const appointmentDB: IAppointment[]=[];
let appointmentId: number = 1;


export const getAllAppointments = async (): Promise<IAppointment[]> =>{
    return appointmentDB;
};


export const getAppointmentById = async (id: number): Promise<IAppointment>=> {
    const foundAppointment: undefined | IAppointment = appointmentDB.find(
        (appointment)=> appointment.id == id
    );

    if (!foundAppointment){
        throw new Error ("Turno no encontrado");
    }
    return foundAppointment;
};



export const createAppointment =  async (createAppointmentDTO: iCreateAppointmentDTO):Promise<IAppointment> =>{
    const foundUser = await getUserById(createAppointmentDTO.userId);
   
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



export const cancelAppointment = async (id: number): Promise<number>=> {
    const foundAppointment = await getAppointmentById(id);

    if (foundAppointment.status == AppointmentStatus.CANCELLED){
        throw new Error ("el turno ya esta cancelado");
    }

    foundAppointment.status = AppointmentStatus.CANCELLED;

    return foundAppointment.id;
};

