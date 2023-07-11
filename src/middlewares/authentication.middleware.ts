// Estos son middlewares
import { Response, Request, NextFunction, json } from 'express';
import { verify } from "jsonwebtoken";

const authenticationUser = ( req: Request, res: Response, next: NextFunction  ) => {   // next es un callback (middleware)
    //1. Procesando la cadena de autorizacion para extraer el token
    
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
   
    const { userId, rol, name } = payload as { userId: string; rol: string; name: string }

    console.log( userId, rol, name);
    
    next()
}

export {
    authenticationUser
};
