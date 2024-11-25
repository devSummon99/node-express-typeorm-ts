import { Request, Response } from "express"
import { userRepository } from "../services";

export const getUsers =  async (req: Request, res: Response) => {
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

export const createUser = (req: Request, res: Response) => {
    res.json("Creando usuario")
}

export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Actualizando usuario numero ${id}`)
}

export const deleteUser =  async (req: Request, res: Response) => {
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

