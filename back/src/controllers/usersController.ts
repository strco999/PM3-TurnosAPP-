import type { Request, Response } from "express";
import { 
  createUserService, 
  getAllUsersService, 
  getUserByIdService, 
  loginUserService } from "../services/UserService";


// GET /users => Obtener el listado de todos los usuarios.
export const getAllUsers = async (_req: Request, res: Response) => {
    try { 
        const users = await getAllUsersService();
        res.status(200).json(users);     
    } catch (error: any) {
      res.status(400).json({  
        message: error.message,
     });
    }       
};

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUserById = async (req: Request, res: Response) => {
    try {  
      const userId = req.params.id;  
      const user = await getUserByIdService(Number(userId));
      res.status(200).json(user); 
    } catch (error: any) {
      if (error.message == "Usuario no encontrado"){
         return res.status(404).json({  
        message: error.message,
     });
      }
      res.status(500).json({  
        message: error.message,
     });
    }       
};

// POST /users/register => Registro de un nuevo usuario.
export const registerUser = async (req: Request, res: Response) => {
    try { 
      const user = await createUserService(req.body); 
      res.status(201).json(user); 
    } catch (error: any) {
      res.status(400).json({  
        message: error.message,
     });
    }      
};  

// POST /users/login => Login del usuario a la aplicación.
export const loginUser = async (req: Request, res: Response) => {
    try {   
        const user = await loginUserService(req.body.username, req.body.password);
        res.status(200).json({
         login:true, 
        user,
    });    
    } catch (error: any) {
      res.status(400).json({  
        message: error.message,
     });
    }     
};
