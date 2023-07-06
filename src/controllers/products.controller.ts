import { Request, Response } from "express";


import { getAllProducts, insertProduct } from "../services/product.service";

async function getProducts(req: Request, res: Response) {
   try {
       const response = await getAllProducts(); 
       console.log( response );

       res.json( response )
       
   } catch (error) {
        console.log( 'error en la extraccion del listado de products' );
        res.json( {
            msg: 'ERROR_PRODUCT_LIST'
        } );
    
   }
    
}

async function getProduct(req: Request, res: Response) {
   console.log(`Obtiene un producto por ID`);
    
}


async function updateProduct(req: Request, res: Response) {
    console.log(`Crea un producto`);
    
}

async function createProduct( req: Request, res: Response ) {
    
    try {

        const data = await insertProduct( req.body );

        console.log( data );
        res.json( data );
    }
     catch (error) {
        console.log( `error en la insercion del producto` );
        res.json({
            msg: `ERROR_INSERT_PRODUCT`
        });
        
    }

    const data = await insertProduct( req.body );

   
    
    
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