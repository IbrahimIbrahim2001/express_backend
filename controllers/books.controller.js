import * as BooksService from "../services/books.service.js";
/**
 * @desc Get all Books
 * @router /api/books
 * @method GET
 * @access Public
 */
export const getAllBooks = async (req, res) => {
    const books = await BooksService.getAllBooks();
    return res.status(200).json(books);
}

/**
 * @desc Get one Book
 * @router /api/books/:id
 * @method GET
 * @access Public
 */
export const getOneBook = async (req, res) => {
    const book = await BooksService.getBookById(req.params.id);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }
    return res.status(200).json(book);
}

/**
 * @desc Create a new Book
 * @router /api/books
 * @method POST
 * @access Public
 */
export const createBook = async (req, res) => {
    const newBook = await BooksService.createBook(req.body);
    res.status(201).json(newBook);
}

/**
 * @desc Delete a Book
 * @router /api/books/:id
 * @method DELETE
 * @access Public
 */
export const deleteBook = async (req, res) => {
    const deleted = await BooksService.deleteBook(req.params.id);
    if (!deleted) {
        return res.status(404).json({ error: "Book not found" });
    }
    res.status(204).send();
}

/**
 * @desc Update a Book
 * @router /api/books/:id
 * @method PUT
 * @access Public
 */
export const updateBook = async (req, res) => {
    const updated = await BooksService.updateBook(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(updated);
}