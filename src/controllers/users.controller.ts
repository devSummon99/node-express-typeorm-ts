import { Request, Response } from "express"

export const getUsers = (req: Request, res: Response) => {
    res.json("Obteniendo todas las usuarios")
}

export const getUserByID = (req: Request, res: Response) => {
    res.json("Obteniendo la usuario buscada")
}

export const createUser = (req: Request, res: Response) => {
    res.json("Creando usuario")
}

export const updateUser = (req: Request, res: Response) => {
    res.json("Actualizando usuario")
}

export const deleteUser = (req: Request, res: Response) => {
    res.json("Eliminando usuario")
}

