import * as UserService from "../services/users.service.js";

/**
 * @desc get user data
 * @router /api/user/
 * @method GET
 * @access Private
 */
export const getUserData = async (req, res) => {
    const user = await AuthService.getUserData(req.params.id);
    res.status(200).json({
        success: true,
        data: user
    })
}

/**
 * @desc get user data
 * @router /api/user/update/:id
 * @method PUT
 * @access Private
 */
export const updateUser = async (req, res) => {

}