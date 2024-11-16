import { Request, Response } from "express"

export const getTasks = (req: Request, res: Response) => {
    res.json("Obteniendo todas las tareas")
}

export const getTaskByID = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Obteniendo la tarea buscada numero ${id}`)
}

export const createTask = (req: Request, res: Response) => {
    res.json("Creando tarea")
}

export const updateTask = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Actualizando tarea numero ${id}`)
}

export const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Eliminando tarea numero ${id}`)
}

