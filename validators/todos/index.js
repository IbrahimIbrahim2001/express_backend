import Joi from "joi";

export const CreateTodoSchema = Joi.object({
    text: Joi.string().required().min(2).max(200)
});

export const UpdateTodoSchema = Joi.object({
    text: Joi.string().required().min(2).max(200)
});