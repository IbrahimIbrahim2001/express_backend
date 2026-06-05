import Users from "../models/users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
export const registerNewUser = async (data) => {
    const user = await Users.findOne({ email: data.email });
    if (user) {
        throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const newUser = new Users({ ...data, password: hashedPassword });
    const result = await newUser.save();
    const { password, ...other } = result._doc;
    const token = jwt.sign({
        id: user._id,
        email: user.email,
        name: user.name
    }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
    return { other, token };
}

export const loginUser = async (data) => {
    const user = await Users.findOne({ email: data.email });
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordMatch = await bcrypt.compare(data.password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email,
        name: user.name
    }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
    return { user, token };
}

export const getUserData = (id) => {
}

export const updateUser = (id, data) => {

}