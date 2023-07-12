// Estos son middlewares
import { Response, Request, NextFunction, json } from 'express';
import { verify } from "jsonwebtoken";
import { RequestExtend } from '../interfaces/RequestExtends.interface';


const authenticationUser = ( req: RequestExtend, res: Response, next: NextFunction  ) => {   // next es un callback (middleware)
    //1. Procesando la cadena de autorizacion para extraer el token
    try {

        const BearerToken = req.headers.authorization || ''; //BEARER 99999999 
    const arrBearerToken = BearerToken.split ( ' ' );     //['Bearer', '99999999']
    const token = arrBearerToken.pop();                    // 9999999999
    
    //2. Verificar la autenticidad del token
    const payload = verify( `${ token }`, `${ process.env.JWT_SECRET_KEY }`)

    // 3. Verificar si no hay carga util
    if ( ! payload ) {
        return res.json({
            msg: 'INVALID_TOKEN'
        });

    }
    //4. Extraer la carga util
   
    const { userId, rol, name } = payload as { userId: string; rol: string; name: string }

    console.log( userId, rol, name );

    //Agregamos los valores del token al objeto Request de Express usando una nueva interface (Herencia)
    req.authUser = { userId, rol, name }


    
    
    next()
        
    } catch (error) {
        res.json({
            msg: 'INVALID_AUTHENTICATION'
        })
    }
}

export {
    authenticationUser
};
