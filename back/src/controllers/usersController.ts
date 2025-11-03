import { Request, Response } from "express";
import { createUserService, getAllUsersService, getUserByIdService } from "../services/UserService";
import { validateCredentialsService } from "../services/CredentialsService";

// GET /users => Obtener el listado de todos los usuarios.
export const getAllUsers = async (_req: Request, res: Response) => {
    try { 
        const users = await getAllUsersService();
        res.status(200).json  (users);     
    } catch (error: any) {
      res.status(400).json({  
        message: error.message,
     });
    }    //   
};

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUserById = async (req: Request, res: Response) => {
    try {  
      const userId = req.params.id;  
      const user = await getUserByIdService(Number(userId));
      res.status(200).json(user); 
    } catch (error: any) {
      res.status(400).json({  
        message: error.message,
     });
    }    //   
};
// POST /users/register => Registro de un nuevo usuario.
export const registerUser = async (req: Request, res: Response) => {
    try { 
      const user = await createUserService(req.body);  
    } catch (error: any) {
      res.status(400).json({  
        message: error.message,
     });
    }    //   
};  
// POST /users/login => Login del usuario a la aplicación.
export const loginUser = async (req: Request, res: Response) => {
    try {   
        const credentialsId = await validateCredentialsService(req.body.username, req.body.password);
        res.status(200).json({credentialsId});    
    } catch (error: any) {
      res.status(400).json({  
        message: error.message,
     });
    }    //   
};
