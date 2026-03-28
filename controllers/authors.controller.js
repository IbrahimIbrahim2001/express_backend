import * as AuthorServices from "../services/authors.service.js";

/**
 * @desc Get all Authors
 * @router /api/authors
 * @method GET
 * @access Public
 */
export const getAuthors = async (req, res) => {
    try {
        const authors = await AuthorServices.getAllAuthors();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/**
 * @desc Get Single Authors
 * @router /api/authors/:id
 * @method GET
 * @access Public
 */
export const getAuthor = async (req, res) => {
    try {
        const author = await AuthorServices.getAuthorById(req.params.id)
        if (!author) {
            return res.status(404).json({ error: "Author not found" });
        }
        res.json(author)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/**
 * @desc CREATE Author
 * @router /api/authors
 * @method POST
 * @access Public
 */
export const createAuthor = async (req, res) => {
    try {
        const newAuthor = await AuthorServices.createAuthor(req.body);
        const { password, ...authorData } = newAuthor.toObject();
        res.status(201).json(newAuthor);
    } catch (err) {
        if (err.code === 11000) {
            res.status(409).json({ error: "Username already exists" });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
}

/**
 * @desc DELETE Author
 * @router /api/authors/:id
 * @method DELETE
 * @access Public
 */
export const deleteAuthor = async (req, res) => {
    try {
        const deleted = await AuthorServices.deleteAuthor(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: "Author not found" });
        }
        res.json(deleted);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}