import * as todosService from "../services/todos.service.js";
/**
 * @desc Get all todos
 * @router /api/todos
 * @method GET
 * @access Public
 */
export const getTodos = async (req, res) => {
    const todos = await todosService.getAllTodos();
    res.status(200).json(todos);
}

/**
 * @desc Create todo
 * @router /api/todos
 * @method POST
 * @access Public
 */
export const createTodo = async (req, res) => {
    const newTodo = await todosService.createTodo(req.body);
    res.status(201).json(newTodo);
}

/**
 * @desc Get single todo
 * @router /api/todos/:id
 * @method GET
 * @access Public
 */
export const getSingleTodo = async (req, res) => {
    const todo = await todosService.getSingleTodo(req.params.id)
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
}

/**
 * @desc Update todo
 * @router /api/todos/:id
 * @method PUT
 * @access Public
 */
export const updateTodo = async (req, res) => {
    const updated = await todosService.updateTodo(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(updated);
}

/**
 * @desc Delete todo
 * @router /api/todos/:id
 * @method DELETE
 * @access Public
 */
export const deleteTodo = async (req, res) => {
    const deleted = await todosService.deleteTodo(req.params.id);
    if (!deleted) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.status(204).send();
}