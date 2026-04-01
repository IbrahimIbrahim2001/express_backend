import { Router } from "express";
import { createTodo, deleteTodo, getSingleTodo, getTodos, updateTodo } from "../../controllers/todos.controller.js";
import { validate } from "../../middlewares/validator.js";
import { CreateTodoSchema, UpdateTodoSchema } from "../../validators/todos/index.js";
import expressAsyncHandler from "express-async-handler";

const router = Router();

// GET all todos
// /api/todos
router.get("/", expressAsyncHandler(getTodos));

// GET single todo
// /api/todos/:id
router.get("/:id", expressAsyncHandler(getSingleTodo));

// CREATE a todo
// /api/todos
router.post("/", validate(CreateTodoSchema), expressAsyncHandler(createTodo));

// DELETE a todo
// /api/todos/:id
router.delete("/:id", expressAsyncHandler(deleteTodo));

// UPDATE a todo
// /api/todos/:id
router.put("/:id", validate(UpdateTodoSchema), expressAsyncHandler(updateTodo));

export default router;