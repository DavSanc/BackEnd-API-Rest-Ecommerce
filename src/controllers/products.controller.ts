import { Request, Response } from "express";


import { getAllProducts, getProductbyId, insertProduct } from "../services/product.service";

async function getProducts(req: Request, res: Response) {
   try {
       const response = await getAllProducts(); 
      const  data = response ? response : 'NOT_FOUND'; //PENDIENTE

       console.log( data );

       res.json( data )
       
   } catch (error) {
        console.log( 'error en la extraccion del listado de products' );
        res.json( {
            msg: 'ERROR_PRODUCT_LIST'
        } );
    
   }
    
}

async function getProduct(req: Request, res: Response) {
    const productId = req.params.id;
   try {
      

      const response = await getProductbyId( productId );
      
      console.log(res);
      res.json( response );
      
   } catch (error) {
        console.log(`Error en la extraccion del producto con id: ${ productId }`);
        
   }
    
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