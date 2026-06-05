import Users from "../models/users.js"
import bcrypt from "bcryptjs"

export const registerNewUser = async (data) => {
    const user = await Users.findOne({ email: data.email });
    if (user) {
        throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const newUser = new Users({ ...data, password: hashedPassword });
    await newUser.save();
    return newUser;
}

export const loginUser = async (data) => {
}

export const getUserData = (id) => {
}

export const updateUser = (id, data) => {

}