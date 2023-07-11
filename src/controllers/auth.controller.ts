import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";

const register = async ( req: Request, res: Response ) => {
    const user = req.body;
    //TODO: Encriptar contrasena
    try {
        const response =  await registerNewUser( user );
    //TODO: No enviar la propiedad contrasna al cliente    
        res.json( response )
        
    } catch (error) {
        console.log(`Error en el registro de usuario`);
        res.json({
            msg: 'ERROR_REGISTER_USER'
        });
        
        
    }   
}

const login = async (req: Request, res: Response) => {
    const user = req.body;

    try {
     const response = await loginUser( user );  

     console.log( response );
     res.json( { response});
     

    } catch (error) {
        console.log(`Error en el acceso del usuario al sistema`);
        res.json({
            msg: 'ERROR_LOGIN_USER'
        });
    } 
}

export{
    register, login
};