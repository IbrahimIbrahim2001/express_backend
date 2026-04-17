import Joi from "joi";

export const CreateBooksSchema = Joi.object({
    title: Joi.string().required().min(2).max(200),
    description: Joi.string().required().min(2).max(200),
    author: Joi.string().required(),
    price: Joi.number().required().min(0),
    genre: Joi.string().required().min(2).max(100)
});

export const UpdateBooksSchema = Joi.object({
    title: Joi.string().min(2).max(200).optional(),
    description: Joi.string().min(2).max(200).optional(),
    author: Joi.string().optional(),
    price: Joi.number().min(0).optional(),
    genre: Joi.string().min(2).max(100).optional()
});