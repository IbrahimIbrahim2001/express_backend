import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
    text: String
}, { timestamps: true });

const Todos = mongoose.model('Todos', todosSchema);

export default Todos;