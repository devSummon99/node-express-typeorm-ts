import { Request, Response } from "express"
import { userRepository } from "../services";
import { User } from "../modules";
import { hashSync, compareSync } from "bcryptjs";




export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userRepository.find();
        if (users.length > 0)
            res.status(200).json(users);
        else { res.status(404).json("Users no found"); }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message);
    }
}

export const getUserByID = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userID = parseInt(id);
        const user = await userRepository.findOneBy({ id: userID });
        if (user)
            res.status(200).json(user);
        else { res.status(404).json("User no found"); }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message);
    }
}

export const createUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const userFind = await userRepository.findOne({ where: { email: email } });
        if (userFind) res.status(400).json("User has already been created");
        else {
            const newUser = new User;
            newUser.username = username;
            newUser.email = email;
            newUser.password = hashSync(password,10);
            userRepository.save(newUser);
            res.status(201).json("User created");
        }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message);
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userID = parseInt(id);
        const user = await userRepository.findOneBy({ id: userID });
        if (user) {
            const { username, email, password } = req.body;
            await userRepository.update({ id: userID }, { username, email, password: hashSync(password, 10) });
            res.status(203).json("User has been modified successfully ");
        }
        else {
            res.status(404).json("User no found");
        }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message);
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userID = parseInt(id);
        const user = await userRepository.findOneBy({ id: userID });
        if (user) {
            await userRepository.delete({ id: userID });
            res.status(203).json("User has been deleted");
        } else {
            res.status(404).json("User no found");
        }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message);
    }
}

