import { compare, hash } from "bcryptjs";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import AuthModel from "../models/auth.models";
import { sign } from "jsonwebtoken";

const registerNewUser = async ( newUser: User ) => {
    //1. consultar en la BD si existe e usuario
    const userFound = await AuthModel.findOne({ email: newUser.email });

    //vERIFICAR si el usuario existe

if( userFound ){
    return 'USER_ALREADY_EXISTS';
    }

    // password must be encripted before user registration
   const hashPassword = await hash( newUser.password, 9 );
   newUser.password = hashPassword;

    //2. Registra el usuario si no existe

    const response = await AuthModel.create( newUser );

    return response;
}

const loginUser = async ( user: Auth ) =>{
    // 1.Consultar en la base de datos si el usuario no existe
    const userFound = await AuthModel.findOne({ email: user.email })
    //Verificando si el usuario no existe
    if( ! userFound ){
        return 'USER_NOT_FOUND';
    }

    // Verificar si la cntrasena es correcta
    const isValidPassword = await compare( 
        user.password,  //password given by the user (not a hash)
        userFound.password   // password Hash that is registered in Data Base
    );

    // Verificar si la contrasenia fue valida
    if( ! isValidPassword ){
        return 'WRONG_PASSWORD';
    }
    
    //3.Crear Token
    const JWT_SECRET = process.env.JWT_SECRET_KEY || '0tr4-c1av3-s3cr3t4';
    const token = sign(
        // Payload: carga util
        {
            userId: userFound._id,
            rol: userFound.rol,
            name: userFound.nombre
        },
        // String secret
        JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );
        return {
            
            token
        }
  
    
}




export {
    registerNewUser,
    loginUser
};