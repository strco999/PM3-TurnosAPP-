import { ICredentials } from "../interfaces/ICredentials";

const credentialsDB: ICredentials[]= [];
let credentialsId: number = 1;


export const createCredentialsService = async (username: string, password: string): Promise<number> => {
    const newCredentials: ICredentials = {
        id: credentialsId++,
        username,
        password,
    };
    credentialsDB.push(newCredentials);
    return newCredentials.id;
};








export const validateCredentialsService = async (username: string, password: string ): Promise<number> => {
    const foundCredentials: undefined | ICredentials = credentialsDB.find(
        (credentials)=>credentials.username == username
    );

if (!foundCredentials){
    throw new Error("No existe el user");
}

if (foundCredentials.password != password){
    throw new Error("Contraseña incorrecta");
}

return foundCredentials.id;
};    