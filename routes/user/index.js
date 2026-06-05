import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { getUserData, updateUser } from "../../controllers/users.controller.js";
import { validate } from "../../middlewares/validator.js";
import { validateUpdateUserSchema } from "../../validators/users/index.js";

const router = Router();

// get user data
// /api/user/:id
router.get("/:id", expressAsyncHandler(getUserData));

// update user
// /api/user/update/:id
router.put("/update/:id", validate(validateUpdateUserSchema), expressAsyncHandler(updateUser));

export default router;