import * as AuthService from "../services/auth.service.js"

/**
 * @desc Register new user
 * @router /api/auth/register
 * @method POST
 * @access Public
 */
export const register = async (req, res) => {
    const user = await AuthService.registerNewUser(req.body);
    res.status(201).json({
        success: true,
        data: user
    })
}

/**
 * @desc login user
 * @router /api/auth/login
 * @method POST
 * @access Public
 */
export const login = async (req, res) => {
    const token = await AuthService.loginUser(req.body);
    res.status(200).json({
        success: true,
        data: token
    })
}