import { Router } from "express";
import { validate } from "../../middlewares/validator.js";
import expressAsyncHandler from "express-async-handler";
import { createBook, deleteBook, getAllBooks, getOneBook, updateBook } from "../../controllers/books.controller.js";
import { CreateBooksSchema, UpdateBooksSchema } from "../../validators/books/index.js";

const router = Router();

// GET all books
// /api/books
router.get("/", expressAsyncHandler(getAllBooks))

// GET a book
// /api/books/:id
router.get('/:id', expressAsyncHandler(getOneBook));

// CREATE a book
// /api/books
router.post("/", validate(CreateBooksSchema), expressAsyncHandler(createBook));

// DELETE a book
// /api/books/:id
router.delete('/:id', expressAsyncHandler(deleteBook));

// UPDATE a book
// /api/books/:id
router.put('/:id', validate(UpdateBooksSchema), expressAsyncHandler(updateBook));

export default router;