import { Request, Response } from "express"
import { Task } from "../modules";

export const getTasks = async (req: Request, res: Response) => {
    try {
    
    } catch (error) {
        
    }
}

export const getTaskByID = async (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Obteniendo la tarea buscada numero ${id}`)
}

export const createTask =  async (req: Request, res: Response) => {
    res.json("Creando tarea")
}

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Actualizando tarea numero ${id}`)
}

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Eliminando tarea numero ${id}`)
}

