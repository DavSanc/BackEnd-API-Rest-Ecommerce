import { connect } from "mongoose";

// TODO:Resolver conexion de MongoDB con Mongoose. 
//Configuracion para la conexion con MongoDB
async function dbConnect() : Promise<void> {
    const DB_URI = 'mongodb://127.0.0.1:27017';
    await connect ( DB_URI );    
}

export default dbConnect;
