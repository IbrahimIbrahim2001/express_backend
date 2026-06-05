import * as UserRepo from "../repositories/users.repository.js";
export const getUserData = async (id) => {
    return await UserRepo.getUserData(id);
}

export const updateUser = async (id, data) => {
    return await UserRepo.updateUser(id, data);
}