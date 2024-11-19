import { Request, Response } from "express"
import { taskRepository } from "../services/tasks.service";

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await taskRepository.find();
        if (tasks.length > 0)
            res.status(200).json(tasks);
        else { res.status(404).json({ msg: "Tasks no found" }); }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message)
    }
}

export const getTaskByID = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const taskID = parseInt(id)
       const task = await taskRepository.findOneBy({id: taskID})
       if (task) 
        res.status(200).json(task)
       else { res.status(404).json({ msg: "Task no found" }); }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message)
    }
}

export const createTask = async (req: Request, res: Response) => {
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

