import { Router, Request, Response } from "express";
import {  createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/products.controller";

const router = Router();

router.post( '/resister', (req: Request, res: Response) =>{
    console.log( 'registra usuario' );
    res.send( 'Registra usuario' );
});
router.post('/login', (req: Request, res: Response) => {
    console.log('Login usuario');
    res.send( 'Login usuario' )    
});

export default router;