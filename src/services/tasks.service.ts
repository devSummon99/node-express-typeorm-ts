import { AppDataSource } from "../db/config"
import { Task } from "../modules"


export const taskRepository = AppDataSource.getRepository(Task);

/*
export const findTasks = async () => {
    const tasks = await taskRepository.find();
    return tasks;
}

export const findTaskByID = async (params: string) => {
    const id = parseInt(params);
    const task = await taskRepository.findOneBy({ id: id })
    return task;
}

export const createTask = async (
    title: string,
    description: string,
    state: State,
    userId: string) => {
    const userID = parseInt(userId);
    const newTask = new Task;
    newTask.title = title;
    newTask.description = description;
    newTask.state = State.PENDING || state;
    const user = await userRepository.findOneBy({ id: userID });
    if (user) { newTask.user = user; }
    await taskRepository.save(newTask);
    return "done";
}

export const updateTask = async (
    title: string,
    description: string,
    state: State,
    userId: string,
    params: string) => {
    const id = parseInt(params);
    const userID = parseInt(userId);
    const user = await userRepository.findOneBy({ id: userID });
    if (user)
        await taskRepository.update(id, { title: title, description: description, state: state, user: user })
    else
        await taskRepository.update(id, { title: title, description: description, state: state })
    return "done"
}

export const deleteTask = async ( params: string ) => {
    const id = parseInt(params);
    await taskRepository.delete(id)
    return "removed"
}
    */