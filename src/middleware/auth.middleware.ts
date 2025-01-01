import e, { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { env } from "../env";
import { userRepository } from "../services";
import { payload } from "../interfaces/payload";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization;

    if (!token) res.status(403).json({ message: "No token provided" });
    else {
        try {
            const payload = jwt.verify(token, env.JWT_SECRET) as any;
            const user = await userRepository.findOne({ where: { id: payload.userID } })
            console.log(user)
            if (!user) res.status(401).json({ message: "Unauthorized" })
            next();
        } catch (error) {
            res.status(401).json({ message: "Unauthorized" })
        }
    }
}

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {}
