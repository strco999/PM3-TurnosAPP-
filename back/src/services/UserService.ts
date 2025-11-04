import { AppDataSource, userRepository } from "../config/data-source";
import { ICreateUserDTO } from "../dtos/iCreateUserDTO";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { createCredentialsService, validateCredentialsService } from "./CredentialsService";



export const getAllUsersService = async (): Promise<User[]> => {
  const users = await userRepository.find();  
	return users;
};



export const getUserByIdService = async (id:number): Promise <User> => {
  const foundUser: User | null = await userRepository.findOne({
		where:{
			id,
		},
   relations: {
    appointments: true,
   },
	});

    if (!foundUser){
        throw new Error("Usuario no encontrado");
    }
    return foundUser;
};









export const createUserService = async (createUserDTO: ICreateUserDTO): Promise<User> =>{
   const resultUser: User = await AppDataSource.transaction(async(entityManager)=>{
	 const newCredentialsId: Credential = await createCredentialsService(
		entityManager,
    createUserDTO.username, 
    createUserDTO.password
);

    const newUser: User = entityManager.create(User, {
			 name: createUserDTO.name,
       email: createUserDTO.email,
       birthdate: createUserDTO.birthdate,
       nDni: createUserDTO.nDni,
       credentialsId: newCredentialsId,
    });

		const results = await entityManager.save(User, newUser);
		return results;
	 }); 
	 
    return resultUser;
};

export const loginUserService = async (username: string, password: string): Promise<User>=> {
   const credentialId = await validateCredentialsService(username, password);

	  const foundUser: User | null = await userRepository.findOne({
		where:{
			credentials:{
				id: credentialId,
			},
		},

});

if (!foundUser){
        throw new Error("Usuario no encontrado");
}

return foundUser;

};