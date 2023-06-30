/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import routeUsers from "./users.route";
import routeProducts from './products.route'

const router = Router();

router.use( '/users', routeUsers );
router.use( '/products', routeProducts)

export default router;