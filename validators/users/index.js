import Joi from "joi";

export const validateRegisterUserSchema = Joi.object({
    name: Joi.string().required().min(2).max(50),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(200)
});

export const validateLoginUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(20)
});

export const validateUpdateUserSchema = Joi.object({
    name: Joi.string().min(2).max(50),
    email: Joi.string().email(),
    password: Joi.string().min(6).max(20)
}).or("name", "email", "password");