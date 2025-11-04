import { EntityManager } from "typeorm";
import { Credential } from "../entities/Credential";
import { credentialRepository } from "../config/data-source";
import bcrypt from "bcryptjs";




export const createCredentialsService = async (
    entityManager: EntityManager,
    username: string, 
    password: string
): Promise<Credential> => {
    const hashPassword = await bcrypt.hash(password, 10);

    const newCredentials: Credential = entityManager.create(Credential, {
        username,
        password:hashPassword,
    });

    const results = await entityManager.save(Credential, newCredentials);
    return results;
};







export const validateCredentialsService = async (
     username: string,
     password: string
): Promise<number> => {
    const foundCredentials: null | Credential = await credentialRepository.findOne({
        where: {
        username,
        },
    });
 
if (!foundCredentials){
    throw new Error("No existe el user");
}

const isValid = await bcrypt.compare(password, foundCredentials.password);

if (!isValid){
    throw new Error("Contraseña incorrecta");
}

return foundCredentials.id;
};    