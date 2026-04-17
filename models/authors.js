import mongoose from "mongoose";

const authorsSchema = mongoose.Schema({
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3
    },
    password: { type: String, required: true },
    address: { type: String, trim: true },
    // birthplace: { type: Date },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});;

authorsSchema.virtual("books", {
    ref: "Books",
    localField: "_id",
    foreignField: "author"
});

const Authors = mongoose.model("Authors", authorsSchema);

export default Authors;