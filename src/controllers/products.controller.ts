import { Request, Response } from "express";


import { insertProduct } from "../services/product.service";

async function getProducts(req: Request, res: Response) {
    console.log( `Obtiene todos los productos`);
    
}

async function getProduct(req: Request, res: Response) {
   console.log(`Obtiene un producto por ID`);
    
}

async function updateProduct(req: Request, res: Response) {
    console.log(`Crea un producto`);
    
}

async function createProduct( req: Request, res: Response ) {
    
    console.log(req.body);
    

    const data = await insertProduct( req.body );

    console.log( data );
    res.json( data );
    
    
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