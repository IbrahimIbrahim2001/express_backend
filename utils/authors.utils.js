import bcrypt from "bcryptjs";

export const normalizeAuthorUsername = (username) => {
    return username.toLowerCase();
}

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}   