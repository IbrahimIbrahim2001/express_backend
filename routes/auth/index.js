import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { getUserData, login, register, updateUser } from "../../controllers/auth.controller.js";
import { validate } from "../../middlewares/validator.js";
import { validateLoginUserSchema, validateRegisterUserSchema, validateUpdateUserSchema } from "../../validators/users/index.js";

const router = Router();

// Register new user
// /api/auth/register
router.post("/register", validate(validateRegisterUserSchema), expressAsyncHandler(register));

// login 
// /api/auth/login
router.get("/login", validate(validateLoginUserSchema), expressAsyncHandler(login));

// get user data
// /api/auth/user/:id
router.get("/user/:id", expressAsyncHandler(getUserData));

// update user
// /api/auth/update
router.put("/update", validate(validateUpdateUserSchema), expressAsyncHandler(updateUser));

export default router;