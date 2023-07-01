import { Request, Response } from "express";

import ProductModel from "../models/products.model";

async function getProducts(req: Request, res: Response) {
    console.log( `Obtiene todos los productos`);
    
}

async function getProduct(req: Request, res: Response) {
   console.log(`Obtiene un producto por ID`);
    
}

async function updateProduct(req: Request, res: Response) {
    console.log(`Crea un producto`);
    
}

async function createProduct(req: Request, res: Response) {
    // const data = req.body;
    // console.log( req.body );
    // res.send( req.body )

    const data = req.body
    const response =  await ProductModel.create( data );

    res.json( response );
    
    
}

async function deleteProduct(req: Request, res: Response) {
    console.log(`Elimina un producto por ID`);
    
}

export {
    getProducts,
    getProduct,
    updateProduct,
    createProduct,
    deleteProduct
};