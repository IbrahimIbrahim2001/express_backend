import * as todosRepo from "../repositories/todos.repository.js";

export const getAllTodos = async () => {
    return await todosRepo.findAll();
};

export const getSingleTodo = async (id) => {
    return await todosRepo.findById(id);
}

export const createTodo = async (data) => {
    data.text = data.text.trim();
    return await todosRepo.create(data);
};

export const updateTodo = async (id, data) => {
    return await todosRepo.update(id, data);
}

export const deleteTodo = async (id) => {
    return await todosRepo.remove(id);
}
