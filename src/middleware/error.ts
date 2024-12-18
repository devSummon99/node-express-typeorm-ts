import { NextFunction, Request, Response } from "express";
import { HttoException } from "../exceptions";

export const errorMiddleware = (error: HttoException, req : Request, res: Response, next: NextFunction)  => {
res.status(error.statusCode).json({
    message : error.message, 
    errorCode : error.errorCode,
    errors : error.errors
})
}