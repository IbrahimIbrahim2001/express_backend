import { Router } from "express";
import { createTodo, deleteTodo, getSingleTodo, getTodos, updateTodo } from "../../controllers/todos.controller.js";
import { validate } from "../../middlewares/validator.js";
import { CreateTodoSchema, UpdateTodoSchema } from "../../validators/todos/index.js";

const router = Router();

// GET all todos
// /api/todos
router.get("/", getTodos);

// GET single todo
// /api/todos/:id
router.get("/:id", getSingleTodo);

// CREATE a todo
// /api/todos
router.post("/", validate(CreateTodoSchema), createTodo);

// DELETE a todo
// /api/todos/:id
router.delete("/:id", deleteTodo);

// UPDATE a todo
// /api/todos/:id
router.put("/:id", validate(UpdateTodoSchema), updateTodo);

export default router;