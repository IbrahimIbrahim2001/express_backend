import bcrypt from "bcryptjs";

export const normalizeAuthorUsername = (username) => {
    return username.toLowerCase();
}

export const hashPassword = async () => {
    return await bcrypt.hash(data.password, 10);
}   