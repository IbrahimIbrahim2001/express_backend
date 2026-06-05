import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { login, register } from "../../controllers/auth.controller.js";
import { validate } from "../../middlewares/validator.js";
import { validateLoginUserSchema, validateRegisterUserSchema } from "../../validators/users/index.js";

const router = Router();

// Register new user
// /api/auth/register
router.post("/register", validate(validateRegisterUserSchema), expressAsyncHandler(register));

// login 
// /api/auth/login
router.post("/login", validate(validateLoginUserSchema), expressAsyncHandler(login));

export default router;