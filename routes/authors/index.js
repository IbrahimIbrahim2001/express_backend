import { Router } from "express";
import { createAuthor, deleteAuthor, getAuthor, getAuthors, updateAuthor } from "../../controllers/authors.controller.js";
import { CreateAuthorSchema, UpdateAuthorSchema } from "../../validators/authors/index.js";
import { validate } from "../../middlewares/validator.js";

const router = Router();

// GET all authors
// /api/authors
router.get('/', getAuthors);

// GET single author
// /api/authors/:id
router.get('/:id', getAuthor);

// CREATE author
// /api/authors
router.post('/', validate(CreateAuthorSchema), createAuthor);

// DELETE author
// /api/authors/:id
router.delete('/:id', deleteAuthor);

// UPDATE author
// /api/authors/:id
router.put('/:id', validate(UpdateAuthorSchema), updateAuthor);

export default router;