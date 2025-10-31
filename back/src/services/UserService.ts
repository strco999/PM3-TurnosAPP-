import { ICreateUserDTO } from "../dtos/iCreateUserDTO";
import { IUser } from "../interfaces/IUser";
import { createCredentials } from "./CredentialsService";

const userDB: IUser[]=[];
let userId: number = 1;

export const getAllUsers = async (): Promise<IUser[]> => {
    return userDB;
};

export const getUserById = async (id:number): Promise <IUser> => {
    const foundUser: undefined | IUser = userDB.find((user)=>user.id == id);
    if (!foundUser){
        throw new Error("Usuario no encontrado");
    }

    return foundUser;
};









export const createUser = async (createUserDTO: ICreateUserDTO): Promise<IUser> =>{
   const newCredentialsId: number = await createCredentials(
    createUserDTO.username, 
    createUserDTO.password
);

const newUser: IUser = {
    id: userId++,
    name: createUserDTO.name,
    email: createUserDTO.email,
    birthdate: createUserDTO.birthdate,
    nDni: createUserDTO.nDni,
    credentialsId: newCredentialsId,
   };

   userDB.push(newUser);
   return newUser;
};