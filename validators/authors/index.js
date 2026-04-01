import Joi from "joi";
import validator from "validator";

export const CreateAuthorSchema = Joi.object({
    first_name: Joi.string()
        .min(2)
        .max(50)
        .required(),

    last_name: Joi.string()
        .min(2)
        .max(50)
        .required(),

    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .required()
        .custom((value, helpers) => {
            if (!validator.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 0
            })) {
                return helpers.error("any.invalid");
            }
            return value;
        })
        .messages({
            "any.invalid": "Password must be at least 8 characters long, contain uppercase, lowercase and numbers"
        }),

    address: Joi.string()
        .max(200)
        .optional()
        .allow("", null),
});

export const UpdateAuthorSchema = Joi.object({
    first_name: Joi.string()
        .min(2)
        .max(50)
        .optional(),

    last_name: Joi.string()
        .min(2)
        .max(50)
        .optional(),

    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .optional(),

    address: Joi.string()
        .max(200)
        .optional()
        .allow("", null),
})