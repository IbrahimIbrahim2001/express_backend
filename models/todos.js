import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: String
});

const Todos = mongoose.model('Todo', todoSchema);

export default Todos;