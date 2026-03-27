import * as todosService from "../services/todos.service.js";
/**
 * @desc Get all todos
 * @router /api/todos
 * @method GET
 * @access Public
 */
export const getTodos = async (req, res) => {
    try {
        const todos = await todosService.getAllTodos();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/**
 * @desc Create todo
 * @router /api/todos
 * @method POST
 * @access Public
 */
export const createTodo = async (req, res) => {
    try {
        const newTodo = await todosService.createTodo(req.body);
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/**
 * @desc Get single todo
 * @router /api/todo/:id
 * @method GET
 * @access Public
 */
export const getSingleTodo = async (req, res) => {
    try {
        const todo = await todosService.getSingleTodo(req.params.id)
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/**
 * @desc Update todo
 * @router /api/todo/:id
 * @method PUT
 * @access Public
 */
export const updateTodo = async (req, res) => {
    try {
        const updated = await todosService.updateTodo(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/**
 * @desc Delete todo
 * @router /api/todo/:id
 * @method DELETE
 * @access Public
 */
export const deleteTodo = async (req, res) => {
    try {
        const deleted = await todosService.deleteTodo(req.params.id);
        res.json(deleted);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}