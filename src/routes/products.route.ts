/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import {  createProduct, deleteProduct, getProduct, getProducts, updateProduct, partialUpdateProduct } from "../controllers/products.controller";
import { authenticationUser } from "../middlewares/authentication.middleware";


const router = Router();
// http://localhost:3000/api/products/
router.get('/', getProducts);
router.get( '/', getProducts );       //oBTIENE LISTA DE TODOS LOS PRODUCTOS
router.get ( '/:id', getProduct );    // Otiene produto por ID
router.post('/', authenticationUser, createProduct );     // Crea producto
router.put('/:id', authenticationUser, updateProduct,  );    // Actualiza todos los campos del productos
router.patch('/:id', authenticationUser, partialUpdateProduct ); //Actualiza algunos productos
router.delete('/:id', authenticationUser, deleteProduct );      // Elimina el producto
router.get( '/user/:id', authenticationUser, ( req: Request, res: Response ) =>{
    res.json({
        msj: 'TODO: Obtener todos los productos por usuario'
    })
} )

export default router;

