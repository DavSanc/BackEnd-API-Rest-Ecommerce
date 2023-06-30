import { connect } from "mongoose";


//Configuracion para la conexion con MongoDB
async function dbConnect() : Promise<void> {
    const DB_URI = 'mongodb://localhost:27017';
    await connect ( DB_URI );    
}

export default dbConnect;
