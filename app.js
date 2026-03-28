
import express, { text } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import TodosRouter from "./routes/todos/index.js";
import AuthorsRouter from "./routes/authors/index.js";

dotenv.config();


// dev flow: Model → Repository → Service → Validation → Middleware → Controller → Routes → app.js(server.js || index.js)
const app = express()
const port = process.env.PORT || "3030";

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (_req, res) => {
    res.send("Hello, Express!");
});
app.use("/api/todos", TodosRouter)
app.use("/api/authors", AuthorsRouter)


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})