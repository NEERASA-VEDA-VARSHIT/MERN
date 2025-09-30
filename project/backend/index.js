import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Auth routes
app.use("/api/auth", authRouter);

connectDB(process.env.MONGODB_URI);


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});