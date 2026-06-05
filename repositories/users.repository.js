import Users from "../models/users.js"
import bcrypt from "bcryptjs";

export const getUserData = async (id) => {
    const user = await Users.findById(id);
    if (!user) {
        throw new Error("User not found");
    }
    const result = await Users.findById(id).select("-password");
    return result;
}

export const updateUser = async (id, data) => {
    const user = await Users.findById(id);
    if (data.password) {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        data.password = hashedPassword;
    }
    if (!user) {
        throw new Error("User not found");
    }
    return Users.findByIdAndUpdate(id, data, { new: true }).select("-password");
}