import { User } from "../interfaces/user.interface";
import AuthModel from "../models/auth.models";

const registerNewUser = async ( newUser: User ) => {
    //1. consultar en la BD si existe e usuario
    const userFound = await AuthModel.findOne({ email: newUser.email });

    //vERIFICAR si el usuario existe

if( userFound ){
    return 'USER_ALREADY_EXISTS';
    }

    //2. Registra el usuario si no existe

    const response = await AuthModel.create( newUser );

    return response;
}

export {
    registerNewUser
};