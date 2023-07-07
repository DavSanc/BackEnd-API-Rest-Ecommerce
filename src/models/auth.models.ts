//  lA esctructura que definamos aqui se vera reflejada en nuestra base de datos
import { Schema, model } from "mongoose";

// Define estructura en la base de datos requerida por mongoose

const authSchema = new Schema(

    // este objeto principal definira atributos del modelo
    {
        nombre:{
            type: String,
            required: true
        },

        rol:{
            type: String,
            required: true,
            default: 'registered'
        },

        email: {
            type: String,
            unique: true,
            required: true
        },

        password:{
            type: String,
            required: true
        }
    },
    // Definira configuraciones que se pueden aplicar en Mongoose para ese objeto
    {
        timestamps: true 
    }
);

// define el modelo a partir de la estructura requerida por mongoose
const AuthModel = model( 'Users', authSchema  )

export default AuthModel;