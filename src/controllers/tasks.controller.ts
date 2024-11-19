import { Request, Response } from "express"
import { taskRepository, userRepository } from "../services";
import { Task } from "../modules";

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
        const task = await taskRepository.findOneBy({ id: taskID })
        if (task)
            res.status(200).json(task)
        else { res.status(404).json({ msg: "Task no found" }); }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message)
    }
}

export const createTask = async (req: Request, res: Response) => {
    const { title, description, state, userID } = req.body;
    try {
        const newTask = new Task;
        const taskFind = await taskRepository.findOne({ where: { title: title } })
        if (taskFind) res.status(400).json({ msg: "Task has already been created" })
        else {
            const user = await userRepository.findOneBy({ id: userID });
            if (!user) { res.status(404).json({ msg: "User no found" }) }
            else {
                newTask.title = title;
                newTask.description = description;
                newTask.state = state;
                newTask.user = user;
                taskRepository.save(newTask);
                res.status(201).json("Task created")
            }
        }
    } catch (err) {
        if (err instanceof Error)
            res.status(501).json(err.message)
    }
}

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Actualizando tarea numero ${id}`)
}

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(`Eliminando tarea numero ${id}`)
}

