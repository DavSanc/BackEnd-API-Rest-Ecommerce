/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import {  createProduct, deleteProduct, getProduct, getProducts, updateProduct, partialUpdateProduct } from "../controllers/products.controller";

const router = Router();
// http://localhost:3000/api/products/

router.get( '/', getProducts );       //oBTIENE LISTA DE TODOS LOS PRODUCTOS
router.get ( '/:id', getProduct );    // Otiene produto por ID
router.post('/', createProduct );     // Crea producto
router.put('/:id', updateProduct );    // Actualiza todos los campos del productos
router.patch('/:id', partialUpdateProduct ); //Actualiza algunos productos
router.delete('/:id', deleteProduct );      // Elimina el producto


export default router;

