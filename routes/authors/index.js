import { Router } from "express";
import { createAuthor, deleteAuthor, getAuthor, getAuthors, updateAuthor } from "../../controllers/authors.controller.js";
import { CreateAuthorSchema, UpdateAuthorSchema } from "../../validators/authors/index.js";
import { validate } from "../../middlewares/validator.js";
import expressAsyncHandler from "express-async-handler";

const router = Router();

// GET all authors
// /api/authors
router.get('/', expressAsyncHandler(getAuthors));

// GET single author
// /api/authors/:id
router.get('/:id', expressAsyncHandler(getAuthor));

// CREATE author
// /api/authors
router.post('/', validate(CreateAuthorSchema), expressAsyncHandler(createAuthor));

// DELETE author
// /api/authors/:id
router.delete('/:id', expressAsyncHandler(deleteAuthor));

// UPDATE author
// /api/authors/:id
router.put('/:id', validate(UpdateAuthorSchema), expressAsyncHandler(updateAuthor));

export default router;