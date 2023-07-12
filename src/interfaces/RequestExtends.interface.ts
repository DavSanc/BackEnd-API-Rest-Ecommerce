import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";



export interface RequestExtend extends Request {
    authUser?: JwtPayload | { userId: string, rol: string, name: string};
}