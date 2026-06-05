import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, minlength: 3, maxlength: 20 },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    // TODO: add password hashing and regex
    password: { type: String, required: true, minlength: 8, maxlength: 20 },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});;

const Users = mongoose.model("Users", userSchema);

export default Users;