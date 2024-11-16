import { Request, Response } from "express"

export const getUsers = (req: Request, res: Response) => {
    res.json("Obteniendo todas las usuarios")
}

export const getUserByID = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Obteniendo la usuario buscada numero ${id}`)
}

export const createUser = (req: Request, res: Response) => {
    res.json("Creando usuario")
}

export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Actualizando usuario numero ${id}`)
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Eliminando usuario numero ${id}`)
}

