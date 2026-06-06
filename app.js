
import express, { text } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import TodosRouter from "./routes/todos/index.js";
import AuthorsRouter from "./routes/authors/index.js";
import BooksRouter from "./routes/books/index.js";
import AuthRouter from "./routes/auth/index.js";
import UserRouter from "./routes/user/index.js";
import helmet from "helmet";


dotenv.config();

// dev flow: Model → Repository → Service → Validation → Middleware → Controller → Routes → app.js(server.js || index.js)
const app = express()
const port = process.env.PORT || "3030";

// Connect to DB
connectDB();


app.use(helmet());

// Middleware
app.use(cors({
    origin: `http://localhost:${process.env.PORT}` || "http://localhost:3030",
}));
app.use(express.json());

// Routes
app.get("/", (_req, res) => {
    res.send("Hello, Express!");
});
app.use("/api/todos", TodosRouter)
app.use("/api/authors", AuthorsRouter)
app.use("/api/books", BooksRouter)
app.use("/api/auth", AuthRouter)
app.use("/api/user", UserRouter)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})