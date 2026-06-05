import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    const secret = process.env.JWT_SECRET;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token, authorization denied"
        })
    }
    const decoded = jwt.verify(token, secret);
    req.user = decoded.user;
    next();
}