import { Request, Response } from "express"
import * as jwt from "jsonwebtoken";
import { compareSync, hashSync } from "bcryptjs";
import { userRepository } from "../services";
import { User } from "../modules";
import { env } from "../env";



export const login = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const userFind = await userRepository.findOne({ where: { email: email } });
        if (!userFind) res.status(400).json("User doesn't exists");
        else {
           if (!compareSync(password, userFind.password)) {
            res.status(400).json("Password is wrong");
           } else {
            const token = jwt.sign({
                id : userFind.id
            }, env.JWT_SECRET)
            res.status(203).json({message : "Login is successful", token})
           }
        }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message);
    }
}

export const register = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;
    try {
        const userFind = await userRepository.findOne({ where: { email: email } });
        if (userFind) res.status(400).json("User already exists");
        else {
            let newUser = new User;
            newUser.username = username;
            newUser.email = email;
            newUser.password = hashSync(password,10);
            newUser.role = role;
            userRepository.save(newUser);
            res.status(201).json("User has successfully registered");
        }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message);
    }
}