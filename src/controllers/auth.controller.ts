import { Request, Response } from "express"
import { userRepository } from "../services";
import { User } from "../modules";
import { compareSync } from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { env } from "../env";
import { token } from "morgan";

export const login = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const userFind = await userRepository.findOne({ where: { email: email } });
        if (!userFind) res.status(400).json("User doesn't exists");
        else {
           if (compareSync(password, userFind.password)) {
            res.status(400).json("Password is wrong");
           } else {
            const tokem = jwt.sign({
                id : userFind.id
            }, env.JWT_SECRET)
           }
           res.status(203).json({"Login is sucess" : String, token})
        }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message);
    }
}

export const register = async (req: Request, res: Response) => {
    
}