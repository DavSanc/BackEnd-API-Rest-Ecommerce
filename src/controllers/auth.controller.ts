import { Request, Response } from "express";
import { registerNewUser } from "../services/auth.service";

const register = async ( req: Request, res: Response ) => {
    const user = req.body;
    
    try {
        const response =  await registerNewUser( user );
        res.json( response )
        
    } catch (error) {
        console.log(`Error en el registro de usuario`);
        res.json({
            msg: 'ERROR_REGISTER_USER'
        });
        
        
    }   
}

const login = async (req: Request, res: Response) => {
    console.log('Login usuario');
    res.send( 'Login usuario' ) 
}

export{
    register, login
};