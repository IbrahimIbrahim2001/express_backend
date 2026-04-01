import * as authorServices from "../services/authors.service.js";

/**
 * @desc Get all Authors
 * @router /api/authors
 * @method GET
 * @access Public
 */
export const getAuthors = async (req, res) => {
    const authors = await authorServices.getAllAuthors();
    res.status(200).json(authors);
}

/**
 * @desc Get Single Authors
 * @router /api/authors/:id
 * @method GET
 * @access Public
 */
export const getAuthor = async (req, res) => {
    const author = await authorServices.getAuthorById(req.params.id)
    if (!author) {
        return res.status(404).json({ error: "Author not found" });
    }
    res.status(200).json(author)
}

/**
 * @desc CREATE Author
 * @router /api/authors
 * @method POST
 * @access Public
 */
export const createAuthor = async (req, res) => {
    const newAuthor = await authorServices.createAuthor(req.body);
    const { password, ...authorData } = newAuthor.toObject();
    res.status(201).json(authorData);
}

/**
 * @desc DELETE Author
 * @router /api/authors/:id
 * @method DELETE
 * @access Public
 */
export const deleteAuthor = async (req, res) => {
    const deleted = await authorServices.deleteAuthor(req.params.id);
    if (!deleted) {
        return res.status(404).json({ error: "Author not found" });
    }
    // res.status(204).send();
    res.status(200).json(deleted);
}


/**
 * @desc UPDATE Author
 * @router /api/authors/:id
 * @method PUT
 * @access Public
 */
export const updateAuthor = async (req, res) => {
    const updated = await authorServices.updateAuthor(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ error: "Author not found" });
    }
    res.status(200).json(updated);
}