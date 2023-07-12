//  lA esctructura que definamos aqui se vera reflejada en nuestra base de datos
import { Schema, model } from "mongoose";

// Define estructura en la base de datos requerida por mongoose

const productSchema = new Schema(

    // este objeto principal definira atributos del modelo
    {
        name:{
            type: String
        },

        id: {
            type: Number,
            required: true
        },

        price:{
            type: Number
        },

        description:{
            type: String
        },

        category: {
            type: String,
            required: true
        },

        stock:{
            type: String
        },

        portions:{
            type: Number
        },

        image:{
            type: String
        },

        userId:{
            type: Number,
            required: true
        },
        delivaryDate:{
            type: Date,
            default: new Date
        },
        

    },
    // Definira configuraciones que se pueden aplicar en Mongoose para ese objeto
    {
        timestamps: true 
    }
);

// define el modelo a partir de la estructura requerida por mongoose
const ProductModel = model( 'Products', productSchema  )

export default ProductModel;