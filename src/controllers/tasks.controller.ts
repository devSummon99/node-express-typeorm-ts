import { Request, Response } from "express"

export const getTasks = (req: Request, res: Response) => {
    res.json("Obteniendo todas las tareas")
}

export const getTaskByID = (req: Request, res: Response) => {
    res.json("Obteniendo la tarea buscada")
}

export const createTask = (req: Request, res: Response) => {
    res.json("Creando tarea")
}

export const updateTask = (req: Request, res: Response) => {
    res.json("Actualizando tarea")
}

export const deleteTask = (req: Request, res: Response) => {
    res.json("Eliminando tarea")
}

