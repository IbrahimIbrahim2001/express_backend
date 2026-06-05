import Users from "../models/users.js"

export const registerNewUser = async (data) => {
    const user = await Users.findOne({ email: data.email });
    if (user) {
        throw new Error("User already exists");
    }
    const newUser = new Users(data);
    await newUser.save();
    return newUser;
}

export const loginUser = async (data) => {
}

export const getUserData = (id) => {

}

export const updateUser = (id, data) => {

}