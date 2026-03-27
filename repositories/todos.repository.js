import Todos from "../models/todos.js"

export const findAll = async () => {
    return await Todos.find();
}

export const findById = async (id) => {
    const todo = await Todos.findById(id);
    return todo;
}

export const create = async (data) => {
    const todo = new Todos(data);
    return await todo.save();
};

export const update = async (id, data) => {
    return await Todos.findByIdAndUpdate(id, data, { new: true });
}

export const remove = async (id) => {
    return await Todos.findByIdAndDelete(id);
}